import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function IntroScreen({ onStart, isExploding, phase, onSkip }) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleStart = () => {
    onStart(soundEnabled);
  };

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center text-white px-6 transition-all duration-700 ${
      isExploding && phase !== 'singularity' ? 'bg-transparent' : 'bg-[#03050a]'
    } ${
      isExploding && (phase === 'birth' || phase === 'transition') ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute w-[500px] h-[500px] bg-cosmic-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-cosmic-blue/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main minimal composition */}
      <div className="relative z-10 max-w-2xl text-center space-y-8">
        
        {/* Subtle badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono uppercase tracking-widest text-zinc-400">
          <Sparkles className="w-3.5 h-3.5 text-cosmic-blue animate-pulse" />
          <span>Experiência Interativa</span>
        </div>

        {/* Name and headline */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-display">
            {portfolioData.personal.name}
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-300 font-light tracking-wide">
            {portfolioData.personal.welcomeMessage}
          </p>

          <p className="text-sm sm:text-base text-zinc-500 max-w-lg mx-auto font-sans leading-relaxed">
            {portfolioData.personal.secondaryPhrase}
          </p>
        </div>

        {/* Exploding status indicator */}
        {isExploding ? (
          <div className="py-6 space-y-2">
            <div className="inline-block w-8 h-8 rounded-full border-2 border-cosmic-blue border-t-transparent animate-spin mb-2" />
            <p className="text-xs font-mono uppercase tracking-widest text-cosmic-cyan animate-pulse">
              {phase === 'singularity' && 'Fase 1: Singularidade cósmica...'}
              {phase === 'expansion' && 'Fase 2: Expansão de partículas e energia...'}
              {phase === 'birth' && 'Fase 3: Nascimento do universo...'}
              {phase === 'transition' && 'Fase 4: Estabilizando atmosfera...'}
            </p>
          </div>
        ) : (
          /* Controls */
          <div className="space-y-6 pt-4">
            
            {/* Audio Choice Toggle */}
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-full border text-xs font-medium transition-all ${
                  soundEnabled
                    ? 'border-cosmic-blue/40 bg-cosmic-blue/10 text-cyan-200 hover:bg-cosmic-blue/20'
                    : 'border-white/10 bg-white/[0.04] text-zinc-400 hover:text-white'
                }`}
                title="Clique para alternar som opcional"
              >
                {soundEnabled ? (
                  <>
                    <Volume2 className="w-4 h-4 text-cosmic-cyan" />
                    <span>Trilha sonora: <strong className="text-white">Ativada</strong></span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-4 h-4 text-zinc-400" />
                    <span>Trilha sonora: <strong className="text-zinc-300">Desativada</strong></span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-zinc-500 tracking-wide">
              (A música é 100% opcional e poderá ser silenciada a qualquer instante)
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={handleStart}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cosmic-brand to-cosmic-purple text-white font-medium text-base shadow-lg shadow-cosmic-brand/20 hover:shadow-cosmic-cyan/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-white/20"
              >
                <span>Iniciar experiência</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onSkip}
                className="text-xs text-zinc-500 hover:text-zinc-300 underline underline-offset-4 transition-colors py-2"
              >
                Pular direto para o conteúdo
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
