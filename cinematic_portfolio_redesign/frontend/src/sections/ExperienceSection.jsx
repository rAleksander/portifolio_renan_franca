import React from 'react';
import { Briefcase, GraduationCap, Globe, Star, Quote } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function ExperienceSection() {
  const { experience, education, languages, reviews } = portfolioData;

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <p className="text-xs uppercase tracking-widest font-mono text-cosmic-cyan">
            Carreira & Conhecimento
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white">
            Experiência & Formação
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
            Estrutura cronológica detalhada da minha atuação no mercado, capacitação acadêmica contínua e depoimentos de quem já trabalhou comigo.
          </p>
        </div>

        {/* Two Columns: Professional Experience (Left) & Education + Languages (Right) */}
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Column 1: Professional Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-white/10">
              <Briefcase className="w-5 h-5 text-cosmic-cyan" />
              <h3 className="text-xl font-bold font-display text-white">
                Experiência Profissional
              </h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-7 sm:p-8 rounded-3xl border border-white/10 space-y-3 relative group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-cosmic-cyan bg-cosmic-cyan/10 px-3 py-1 rounded-full border border-cosmic-cyan/20">
                      {exp.period}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">
                      {exp.location}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold font-display text-white">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-medium text-zinc-300">
                      {exp.company}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed pt-2 border-t border-white/5">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Education & Languages (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b border-white/10">
                <GraduationCap className="w-5 h-5 text-cosmic-blue" />
                <h3 className="text-xl font-bold font-display text-white">
                  Formação Acadêmica
                </h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1.5"
                  >
                    <span className="text-[11px] font-mono text-cosmic-cyan">
                      {edu.period}
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      {edu.title}
                    </h4>
                    <p className="text-xs text-zinc-400 font-light">
                      {edu.institution}
                    </p>
                    <span className="inline-block text-[10px] uppercase font-mono tracking-wider text-zinc-400 bg-white/5 px-2 py-0.5 rounded mt-1">
                      {edu.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-white/10">
                <Globe className="w-5 h-5 text-cosmic-violet" />
                <h3 className="text-lg font-bold font-display text-white">
                  Idiomas
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {languages.map((lang, idx) => (
                  <div key={idx} className="glass-panel p-3.5 rounded-xl text-center border border-white/10">
                    <div className="text-xs font-semibold text-white">{lang.name}</div>
                    <div className="text-[11px] text-zinc-400 font-mono mt-0.5">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Client Reviews Section */}
        <div className="space-y-8 pt-8 border-t border-white/10">
          <div className="max-w-xl space-y-2">
            <h3 className="text-2xl font-bold font-display text-white">
              Depoimentos & Avaliações
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              Feedback real de quem acompanhou projetos e entregas no dia a dia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <blockquote
                key={idx}
                className="glass-panel p-7 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 font-light italic leading-relaxed">
                    "{rev.content}"
                  </p>
                </div>

                <footer className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white">{rev.name}</div>
                    <div className="text-[11px] text-zinc-400 font-mono">{rev.location}</div>
                  </div>
                  <Quote className="w-5 h-5 text-zinc-500 opacity-40" />
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
