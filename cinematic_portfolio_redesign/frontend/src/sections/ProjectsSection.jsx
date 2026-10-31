import React, { useState } from 'react';
import { ExternalLink, Github, Layers, ArrowUpRight, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function ProjectsSection() {
  const { projects, social } = portfolioData;
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'fullstack', label: 'Full Stack & Web' },
    { id: 'data', label: 'Dados & BI' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'fullstack') return p.category.toLowerCase().includes('full stack') || p.category.toLowerCase().includes('front-end');
    if (filter === 'data') return p.category.toLowerCase().includes('data') || p.category.toLowerCase().includes('bi');
    return true;
  });

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest font-mono text-cosmic-cyan">
              Portfólio em Destaque
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white">
              Projetos & Aplicações
            </h2>
            <p className="text-zinc-400 font-light max-w-xl text-sm sm:text-base">
              Soluções reais desenvolvidas com rigor técnico, arquitetura modular e foco em resolver necessidades concretas.
            </p>
          </div>

          <a
            href={social.githubRepos}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cosmic-cyan hover:text-white transition-colors self-start md:self-auto py-2 border-b border-cosmic-cyan/30 hover:border-white"
          >
            <span>Ver repositórios no GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                filter === cat.id
                  ? 'bg-white text-space-950 font-semibold shadow-md'
                  : 'glass-panel text-zinc-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-panel-interactive rounded-3xl overflow-hidden flex flex-col justify-between border border-white/10 group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-space-950/80 border-b border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      const src = e.currentTarget.getAttribute('src') || '';
                      if (src.startsWith('/img/')) {
                        e.currentTarget.src = src.replace('/img/', './img/');
                      } else if (src.startsWith('./img/')) {
                        e.currentTarget.src = src.replace('./img/', '/images/');
                      }
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent" />
                  
                  {/* Status & Category Tag */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider bg-space-950/90 text-cosmic-cyan border border-cosmic-cyan/30 px-3 py-1 rounded-full backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono bg-white/10 text-zinc-300 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-7 sm:p-8 space-y-6">
                  
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cosmic-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-300 text-sm font-light mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Problem & Contribution breakdown */}
                  <div className="space-y-3 bg-white/[0.02] p-4 rounded-2xl border border-white/5 text-xs">
                    <div>
                      <strong className="text-zinc-300 font-medium block mb-1">Finalidade / Desafio:</strong>
                      <span className="text-zinc-400 font-light">{project.problem}</span>
                    </div>
                    <div>
                      <strong className="text-zinc-300 font-medium block mb-1">Minha Contribuição Real:</strong>
                      <span className="text-zinc-400 font-light">{project.contribution}</span>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Action Links Footer */}
              <div className="px-7 sm:px-8 pb-7 pt-2 flex items-center justify-between border-t border-white/5">
                <div className="flex items-center gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-cosmic-brand hover:bg-cosmic-purple px-4 py-2 rounded-full transition-colors"
                    >
                      <span>Acessar</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white glass-button px-4 py-2 rounded-full"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repositório</span>
                    </a>
                  )}
                </div>

                <span className="text-[11px] font-mono text-zinc-500">
                  #{project.id}
                </span>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
