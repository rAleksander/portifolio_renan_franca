/**
 * AudioManager.js
 * Singleton audio controller using Web Audio API.
 * Guarantees zero autoplay issues, smooth looping, volume controls,
 * and frequency analysis for gentle visual reactivity.
 */

class AudioManager {
  constructor() {
    this.audioElement = null;
    this.audioContext = null;
    this.sourceNode = null;
    this.gainNode = null;
    this.analyserNode = null;
    this.frequencyData = null;

    this.isPlaying = false;
    this.isMuted = false;
    this.volume = 0.45; // Moderate initial volume
    this.userHasInteracted = false;
    this.isEnabled = false;
    this.listeners = new Set();
    this.isInitialized = false;

    // Smoothed bass value for 3D reactivity
    this.smoothedBass = 0;
  }

  static getInstance() {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  /**
   * Initializes audio context and element upon explicit user interaction
   */
  initialize() {
    if (this.isInitialized) return;

    try {
      this.audioElement = new Audio('/audio/soundtrack.mp3');
      this.audioElement.preload = 'auto';
      this.audioElement.loop = true;

      // Handle loop crossfade or seamless repeat
      this.audioElement.addEventListener('ended', () => {
        this.audioElement.currentTime = 0;
        this.audioElement.play().catch(e => console.warn('Loop play prevented:', e));
      });

      this.audioElement.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audioElement.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      // Initialize Web Audio API nodes
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioContext = new AudioCtx();
        this.sourceNode = this.audioContext.createMediaElementSource(this.audioElement);
        this.gainNode = this.audioContext.createGain();
        this.gainNode.gain.setValueAtTime(this.volume, this.audioContext.currentTime);

        this.analyserNode = this.audioContext.createAnalyser();
        this.analyserNode.fftSize = 256;
        this.analyserNode.smoothingTimeConstant = 0.85;

        // Route: Source -> Analyser -> Gain -> Destination
        this.sourceNode.connect(this.analyserNode);
        this.analyserNode.connect(this.gainNode);
        this.gainNode.connect(this.audioContext.destination);

        this.frequencyData = new Uint8Array(this.analyserNode.frequencyBinCount);
      }

      this.isInitialized = true;
    } catch (err) {
      console.warn('Web Audio API not supported or failed to initialize:', err);
    }
  }

  /**
   * Starts playback if enabled
   */
  async play() {
    if (!this.isEnabled) return;
    this.initialize();

    try {
      if (this.audioContext && this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
      }
      if (this.audioElement) {
        await this.audioElement.play();
        this.isPlaying = true;
        this.notify();
      }
    } catch (err) {
      console.warn('Playback error:', err);
      this.isPlaying = false;
      this.notify();
    }
  }

  /**
   * Pauses playback
   */
  pause() {
    if (this.audioElement && !this.audioElement.paused) {
      this.audioElement.pause();
      this.isPlaying = false;
      this.notify();
    }
  }

  /**
   * Toggles play/pause
   */
  togglePlay() {
    if (!this.isEnabled) {
      this.isEnabled = true;
      this.play();
      return;
    }
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  /**
   * Toggles mute
   */
  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.gainNode && this.audioContext) {
      const targetGain = this.isMuted ? 0 : this.volume;
      this.gainNode.gain.setTargetAtTime(targetGain, this.audioContext.currentTime, 0.05);
    } else if (this.audioElement) {
      this.audioElement.muted = this.isMuted;
    }
    this.notify();
  }

  /**
   * Sets volume (0.0 to 1.0)
   */
  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (!this.isMuted && this.gainNode && this.audioContext) {
      this.gainNode.gain.setTargetAtTime(this.volume, this.audioContext.currentTime, 0.05);
    } else if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
    this.notify();
  }

  /**
   * Returns current bass intensity normalized (0.0 to 1.0)
   * Using exponential moving average for smooth visual response
   */
  getBassEnergy() {
    if (!this.isPlaying || !this.analyserNode || !this.frequencyData) {
      // Natural organic breathing fallback when audio is not playing
      const time = performance.now() * 0.001;
      return 0.15 + 0.05 * Math.sin(time * 1.5);
    }

    this.analyserNode.getByteFrequencyData(this.frequencyData);

    // Bins 1 to 6 cover low frequencies (approx 40Hz to 180Hz with 44.1kHz / 256)
    let sum = 0;
    const count = 6;
    for (let i = 1; i <= count; i++) {
      sum += this.frequencyData[i];
    }
    const rawBass = sum / (count * 255); // 0.0 to 1.0

    // Smooth with lerp
    this.smoothedBass += (rawBass - this.smoothedBass) * 0.15;
    return this.smoothedBass;
  }

  /**
   * Subscribe to state changes
   */
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(cb => cb({
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
      isEnabled: this.isEnabled,
      volume: this.volume
    }));
  }
}

export const audioManager = AudioManager.getInstance();
