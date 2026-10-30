# Renan Aleksander — Universo Cinematográfico & Portfólio Profissional

Experiência web cinematográfica, imersiva e interativa desenvolvida com **React**, **Three.js**, **GSAP**, **Web Audio API** e **Tailwind CSS**, apresentando a trajetória profissional, projetos reais, competências e canais de contato de **Renan Aleksander** (Desenvolvedor Full Stack & Analista de Dados).

---

## 🌌 Destaques da Experiência

1. **Abertura Cinematográfica Independente:** Tela de entrada minimalista com foco tipográfico, seletor prévio de trilha sonora opcional e botão "Iniciar experiência".
2. **Explosão Cósmica (4 Fases):** Coreografia com GSAP e WebGL (Singularidade → Expansão em 3D → Nascimento do Universo → Transição contínua) com opção de pular e respeito ao `prefers-reduced-motion`.
3. **Cenário 3D Espacial Persistente (Three.js):** 
   - Campo de 2.200 estrelas estratificadas com parallax de rolagem.
   - Nebulosas volumétricas que respiram suavemente.
   - Cometas cruzando a tela diagonalmente da região superior direita para a inferior esquerda em intervalos espaçados.
4. **Áudio Inteligente & Reatividade:**
   - Trilha sonora lo-fi (*Venice* por Scandinavianz) sem copyright.
   - Web Audio API com `AnalyserNode` modulando sutilmente graves em tempo real.
   - Controle persistente de play/pause, mute e volume deslizante no header.
   - Loop contínuo sem reinício entre seções.
5. **Conteúdo Profissional 100% Real:**
   - **Projetos:** DMT Áster (ERP corporativo modular em TypeScript, PostgreSQL e Next.js), RAOF Auto (Catálogo e simulador de financiamento automotivo em tempo real), Ninare (Plataforma materno-infantil em Tailwind CSS e JS), Análise de Dados em Redes de Delivery (Power BI, DAX e ETL) e DMT AI Platform.
   - **Competências:** Organizadas por domínio sem barras arbitrárias ou métricas inventadas.
   - **Experiência e Formação:** DMT Data Consulting, RAOF Tech, graduação em Sistemas para Internet, pós-graduação em Análise de Dados e formação em Inteligência Artificial no SENAC.

---

## 📁 Estrutura do Repositório

```text
cinematic_portfolio_redesign/
├── frontend/                     # Aplicação Web (Interface, 3D, Áudio e Animações)
│   ├── public/
│   │   ├── audio/
│   │   │   └── soundtrack.mp3    # Trilha sonora original mantida intacta
│   │   └── images/               # Fotos e imagens reais dos projetos
│   ├── src/
│   │   ├── animations/           # GSAP timelines e coreografias
│   │   ├── audio/                # AudioManager singleton (Web Audio API)
│   │   ├── components/           # IntroScreen, Navbar, AudioController, etc.
│   │   ├── data/                 # portfolioData.js estruturado
│   │   ├── hooks/                # useAudio, useScrollSpy
│   │   ├── sections/             # Hero, About, Projects, Skills, Exp, Contact
│   │   ├── styles/               # CSS global, Glassmorphism, Tailwind
│   │   ├── three/                # CosmicScene, StarField, Comets, Nebulae
│   │   ├── App.jsx               # Orquestrador da aplicação
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
├── backend/                      # API opcional para contato e futuras integrações
│   ├── src/
│   │   ├── app.js
│   │   └── server.js
│   ├── tests/                    # Testes automatizados (Node native test runner)
│   ├── package.json
│   └── README.md
├── docs/                         # Documentação e análise técnica
│   ├── ARQUITETURA.md
│   ├── AUDIO_ANALYSIS.md
│   └── GUIA_EXECUCAO.md
├── .gitignore
└── README.md
```

---

## 🚀 Como Executar

### 1. Frontend (Interface & Experiência Completa)
```bash
cd frontend
npm install
npm run dev
```
Acesse: `http://localhost:5173`

### 2. Backend (Servidor de Contato)
```bash
cd backend
npm install
npm start
```
Acesse: `http://localhost:3001`

### 3. Testes Automatizados
```bash
cd backend
npm test
```

---

## 🛠️ Tecnologias Utilizadas
- **Frontend:** React 18, Vite, Three.js, GSAP & ScrollTrigger, Tailwind CSS, Lucide Icons, Web Audio API.
- **Backend:** Node.js, Express, CORS, Node Test Runner.
- **Assets:** Áudio lo-fi original (*Venice* - Scandinavianz), imagens reais de perfil e capturas de tela dos projetos.
