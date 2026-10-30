import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { AudioController } from './AudioController';
import { portfolioData } from '../data/portfolioData';

export function Navbar({ activeSection = 'hero' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Início', id: 'hero' },
    { href: '#about', label: 'Sobre', id: 'about' },
    { href: '#projects', label: 'Projetos', id: 'projects' },
    { href: '#skills', label: 'Competências', id: 'skills' },
    { href: '#experience', label: 'Experiência & Formação', id: 'experience' },
    { href: '#contact', label: 'Contato', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-space-950/80 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/40' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand */}
        <a 
          href="#hero" 
          className="font-display font-bold text-xl tracking-tight text-white flex items-center gap-1.5 group"
        >
          <span>Renan</span>
          <span className="text-cosmic-cyan group-hover:text-cosmic-violet transition-colors">Aleksander</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cosmic-blue animate-pulse" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium" aria-label="Navegação principal">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-cosmic-cyan to-cosmic-violet rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right side controls: Audio + Contact button */}
        <div className="flex items-center gap-3">
          {/* Audio controller */}
          <AudioController />

          {/* Quick contact CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all hover:scale-[1.02]"
          >
            <span>Contato</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cosmic-cyan" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="lg:hidden p-2 rounded-xl text-zinc-300 hover:text-white bg-white/5 border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-space-950/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-base font-medium ${
                    activeSection === link.id ? 'text-cosmic-cyan' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full bg-cosmic-brand text-white font-medium text-sm"
            >
              Falar com Renan
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
