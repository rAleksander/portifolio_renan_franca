import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function HeroSection() {
  const { personal, social } = portfolioData;

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 px-6">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Status pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
            <span className="text-zinc-200">Disponível para novos projetos e oportunidades</span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-widest font-mono text-cosmic-cyan">
              {personal.role}
            </p>
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold font-display tracking-tight text-white leading-[1.08]">
              Olá! Sou <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic-cyan via-white to-cosmic-violet">
                {personal.name}
              </span>
            </h1>
          </div>

          {/* Bio text */}
          <p className="text-lg text-zinc-300 max-w-xl font-light leading-relaxed">
            {personal.shortBio}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-white text-space-950 font-medium text-sm hover:bg-zinc-200 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-white/10"
            >
              <span>Explorar Projetos</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full glass-button text-white font-medium text-sm flex items-center gap-2"
            >
              <span>Iniciar Conversa</span>
            </a>
          </div>

          {/* Social quick links */}
          <div className="flex items-center gap-4 pt-2 text-zinc-400">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Renan"
              className="p-2.5 rounded-full glass-panel hover:text-white hover:border-cosmic-blue/40 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Renan"
              className="p-2.5 rounded-full glass-panel hover:text-white hover:border-cosmic-blue/40 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${social.email}`}
              aria-label="E-mail de Renan"
              className="p-2.5 rounded-full glass-panel hover:text-white hover:border-cosmic-blue/40 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
            <span className="text-xs text-zinc-500 font-mono pl-2">
              {personal.location}
            </span>
          </div>

          {/* Metrics counter strip */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-lg">
            {personal.metrics.map((metric, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {metric.value}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Profile Picture with Cosmic Glass Border */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 sm:w-80 lg:w-96 aspect-square group">
            
            {/* Glowing orbital ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cosmic-cyan/30 via-cosmic-purple/20 to-transparent blur-2xl group-hover:blur-3xl transition-all duration-500" />

            {/* Glass frame */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass-panel p-2.5 border border-white/15">
              <img
                src={personal.avatar}
                alt={personal.fullName}
                className="w-full h-full object-cover rounded-2xl grayscale-[20%] contrast-[105%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                loading="eager"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 glass-panel px-4 py-2.5 rounded-2xl border border-cosmic-blue/30 shadow-xl flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cosmic-cyan animate-pulse" />
              <span className="text-xs font-semibold text-white font-display">Full Stack & Dados</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
