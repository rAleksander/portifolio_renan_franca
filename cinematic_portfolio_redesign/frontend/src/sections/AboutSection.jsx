import React from 'react';
import { Code2, Database, Bot, GraduationCap, HeartPulse, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function AboutSection() {
  const { personal, services } = portfolioData;

  const iconMap = {
    Code: Code2,
    BarChart3: Database,
    Cpu: Bot,
  };

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <p className="text-xs uppercase tracking-widest font-mono text-cosmic-cyan">
            Conheça minha trajetória
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white">
            Sobre Mim & Áreas de Atuação
          </h2>
          <p className="text-zinc-400 font-light leading-relaxed">
            Uma abordagem que integra desenvolvimento de software consistente, análise minuciosa de dados e inteligência artificial aplicada.
          </p>
        </div>

        {/* Top Split: Detailed Biography & Background Highlights */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Bio text cards */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-3">
              <span>Construindo soluções funcionais do conceito à entrega</span>
            </h3>

            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-light">
              Sou profissional de Tecnologia graduado em <strong>Sistemas para Internet</strong> e pós-graduado em <strong>Análise de Dados</strong>, atualmente em aperfeiçoamento contínuo em <strong>Inteligência Artificial e Machine Learning</strong> pelo SENAC.
            </p>

            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-light">
              No dia a dia, uno as duas pontas da tecnologia: a engenharia de software full stack (desenvolvendo interfaces ágeis com React, Tailwind e backends eficientes em Python/Django e Node) com a inteligência de negócios (modelagem relacional em SQL, PostgreSQL, pipelines de dados e visualizações analíticas em Power BI com DAX).
            </p>

            <div className="pt-2 border-t border-white/10 space-y-3">
              <div className="flex items-start gap-3 text-zinc-300 text-sm">
                <HeartPulse className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Visão multidisciplinar:</strong> Minha experiência prévia no setor de saúde agregou uma cultura de rigor ético, atenção crítica a detalhes, processos estruturados e agilidade na tomada de decisões em momentos de pressão.
                </span>
              </div>
              <div className="flex items-start gap-3 text-zinc-300 text-sm">
                <GraduationCap className="w-5 h-5 text-cosmic-cyan shrink-0 mt-0.5" />
                <span>
                  <strong>Metodologias e Engenharia:</strong> Prática com Scrum e Spec-Driven Development (SDD), priorizando alinhamento de requisitos e especificação precisa antes do código.
                </span>
              </div>
            </div>
          </div>

          {/* Key pillars card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 rounded-3xl space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-cosmic-cyan">
                Filosofia de Trabalho
              </h4>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Código legível, modular e pronto para manutenção</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Decisões embasadas em métricas e dados reais</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Automação de rotinas repetitivas para ganho de escala</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Interfaces focadas na melhor experiência do usuário</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-cosmic-purple/20 bg-gradient-to-br from-space-900/80 to-cosmic-purple/10">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                Localização & Atuação
              </div>
              <div className="text-base font-semibold text-white">
                Brasília, DF • Disponível para atuação Remota ou Híbrida
              </div>
            </div>
          </div>

        </div>

        {/* Services Cards Grid */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Serviços e Soluções
            </h3>
            <span className="text-xs font-mono text-zinc-500">
              O que posso entregar para o seu negócio
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Code2;
              return (
                <div
                  key={service.id}
                  className="glass-panel-interactive p-8 rounded-3xl flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cosmic-cyan group-hover:text-white group-hover:bg-cosmic-brand transition-all">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400">
                        {service.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-display text-white">
                      {service.title}
                    </h4>

                    <p className="text-sm text-zinc-400 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
