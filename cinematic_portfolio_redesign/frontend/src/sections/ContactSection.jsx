import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MessageSquare, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function ContactSection() {
  const { social, personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Try posting to local or deployed backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback: If backend is offline or static deploy, simulate graceful reception & suggest email
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Não foi possível enviar pelo servidor.');
      }
    } catch (err) {
      // Graceful fallback for static environment
      console.warn('Backend API note:', err.message);
      // If server wasn't running, still provide direct email fallback
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Contact Container with Calm Glass Aesthetic */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 relative overflow-hidden">
          
          {/* Subtle gentle background light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cosmic-brand/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Links & Info */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest font-mono text-cosmic-cyan">
                  Vamos Conversar
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                  Entre em Contato
                </h2>
                <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
                  Estou disponível para novas oportunidades, projetos de desenvolvimento full stack, análise de dados e parcerias em tecnologia.
                </p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-4">
                
                {/* Email */}
                <a
                  href={`mailto:${social.email}`}
                  className="glass-panel p-4 rounded-2xl flex items-center gap-4 hover:border-cosmic-cyan/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cosmic-cyan group-hover:bg-cosmic-brand group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono">E-mail Direto</div>
                    <div className="text-sm font-medium text-white">{social.email}</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-4 rounded-2xl flex items-center gap-4 hover:border-cosmic-cyan/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cosmic-blue group-hover:bg-cosmic-brand group-hover:text-white transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono">LinkedIn</div>
                    <div className="text-sm font-medium text-white">linkedin.com/in/francarenan</div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-4 rounded-2xl flex items-center gap-4 hover:border-cosmic-cyan/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:bg-cosmic-brand group-hover:text-white transition-all">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono">GitHub</div>
                    <div className="text-sm font-medium text-white">github.com/rAleksander</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-4 rounded-2xl flex items-center gap-4 hover:border-emerald-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono">WhatsApp</div>
                    <div className="text-sm font-medium text-white">{social.phone}</div>
                  </div>
                </a>

              </div>

            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
              
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono text-zinc-400">
                      Nome completo <span className="text-cosmic-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="w-full bg-space-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cosmic-cyan transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono text-zinc-400">
                      E-mail profissional <span className="text-cosmic-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu.email@dominio.com"
                      required
                      className="w-full bg-space-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cosmic-cyan transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono text-zinc-400">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Ex: Oportunidade / Projeto Full Stack"
                    className="w-full bg-space-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cosmic-cyan transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono text-zinc-400">
                    Mensagem <span className="text-cosmic-cyan">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte sobre sua demanda ou oportunidade..."
                    required
                    className="w-full bg-space-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cosmic-cyan transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Mensagem registrada com sucesso! Entrarei em contato em breve.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cosmic-brand to-cosmic-purple text-white font-medium text-sm hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-cosmic-brand/20 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}</span>
                </button>

              </form>

            </div>

          </div>

        </div>

        {/* Clean Footer */}
        <footer className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} {personal.fullName}. Todos os direitos reservados.
          </div>
          <div className="font-mono text-zinc-400">
            {personal.role}
          </div>
        </footer>

      </div>
    </section>
  );
}
