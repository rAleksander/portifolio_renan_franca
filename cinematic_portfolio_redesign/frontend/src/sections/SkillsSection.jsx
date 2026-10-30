import React from 'react';
import { Terminal, Database, Cpu, GitBranch, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function SkillsSection() {
  const { skills } = portfolioData;

  const categories = [
    {
      title: "Desenvolvimento Full Stack",
      icon: Terminal,
      items: skills.development,
      color: "text-cosmic-cyan",
      borderColor: "border-cosmic-cyan/20"
    },
    {
      title: "Dados & Business Intelligence",
      icon: Database,
      items: skills.data,
      color: "text-cosmic-blue",
      borderColor: "border-cosmic-blue/20"
    },
    {
      title: "Automação & Inteligência Artificial",
      icon: Cpu,
      items: skills.automationAndAI,
      color: "text-cosmic-violet",
      borderColor: "border-cosmic-violet/20"
    },
    {
      title: "Metodologias & Práticas de Engenharia",
      icon: GitBranch,
      items: skills.practices,
      color: "text-emerald-400",
      borderColor: "border-emerald-400/20"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <p className="text-xs uppercase tracking-widest font-mono text-cosmic-cyan">
            Competências Técnicas
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white">
            Stack & Ferramentas
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
            Habilidades estruturadas por domínio profissional, com diferenciação clara entre ferramentas de produção contínua, aplicações em projetos e tecnologias em aperfeiçoamento.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6"
              >
                {/* Category Title */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${cat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {cat.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 font-light leading-snug">
                        {skill.experience}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Learning note */}
        <div className="glass-panel p-6 rounded-2xl border border-cosmic-blue/20 bg-space-900/60 flex items-start gap-4">
          <Sparkles className="w-5 h-5 text-cosmic-cyan shrink-0 mt-0.5" />
          <div className="text-xs text-zinc-300 leading-relaxed font-light">
            <strong className="text-white font-medium">Aperfeiçoamento Contínuo:</strong> A evolução técnica é diária. Cursando atualmente a formação técnica em Inteligência Artificial no SENAC e aplicando conceitos de engenharia de software limpa em todos os projetos.
          </div>
        </div>

      </div>
    </section>
  );
}
