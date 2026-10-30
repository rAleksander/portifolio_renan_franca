import { useState, useEffect } from 'react';
import { audioManager } from '../audio/AudioManager';

export function useAudio() {
  const [audioState, setAudioState] = useState({
    isPlaying: audioManager.isPlaying,
    isMuted: audioManager.isMuted,
    isEnabled: audioManager.isEnabled,
    volume: audioManager.volume,
  });

  useEffect(() => {
    const unsubscribe = audioManager.subscribe((state) => {
      setAudioState({ ...state });
    });
    return unsubscribe;
  }, []);

  return {
    ...audioState,
    play: () => audioManager.play(),
    pause: () => audioManager.pause(),
    togglePlay: () => audioManager.togglePlay(),
    toggleMute: () => audioManager.toggleMute(),
    setVolume: (v) => audioManager.setVolume(v),
    enableAudio: (enabled) => {
      audioManager.isEnabled = enabled;
      audioManager.notify();
    }
  };
}
