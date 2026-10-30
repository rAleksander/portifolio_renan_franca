import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { useAudio } from '../hooks/useAudio';

export function AudioController() {
  const { isPlaying, isMuted, volume, togglePlay, toggleMute, setVolume, isEnabled } = useAudio();
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  return (
    <div className="relative inline-flex items-center gap-2 bg-space-900/80 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 shadow-lg text-xs">
      
      {/* Equalizer animation indicator */}
      <div className="flex items-end gap-0.5 h-3.5 px-1" title={isPlaying && !isMuted ? "Áudio tocando" : "Áudio pausado"}>
        <span className={`w-0.5 bg-cosmic-cyan rounded-full transition-all ${isPlaying && !isMuted ? 'h-3 animate-pulse' : 'h-1 opacity-40'}`} />
        <span className={`w-0.5 bg-cosmic-blue rounded-full transition-all ${isPlaying && !isMuted ? 'h-3.5 animate-pulse delay-75' : 'h-1.5 opacity-40'}`} />
        <span className={`w-0.5 bg-cosmic-violet rounded-full transition-all ${isPlaying && !isMuted ? 'h-2 animate-pulse delay-150' : 'h-1 opacity-40'}`} />
      </div>

      {/* Play / Pause */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pausar música" : "Tocar música"}
        className="p-1 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
      >
        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
      </button>

      {/* Mute / Unmute */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? "Ativar som" : "Silenciar áudio"}
        className="p-1 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
      >
        {isMuted || volume === 0 ? (
          <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
        ) : (
          <Volume2 className="w-3.5 h-3.5 text-cosmic-cyan" />
        )}
      </button>

      {/* Volume Hover Slider Toggle */}
      <div 
        className="relative flex items-center"
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        <div className={`transition-all duration-200 overflow-hidden flex items-center ${
          showVolumeSlider ? 'w-16 opacity-100 ml-1' : 'w-0 opacity-0'
        }`}>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            aria-label="Controle de volume"
            className="w-16 h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-cosmic-cyan"
          />
        </div>
      </div>
      
      <span className="hidden sm:inline text-[10px] text-zinc-400 font-mono tracking-tight pl-0.5">
        LO-FI
      </span>
    </div>
  );
}
