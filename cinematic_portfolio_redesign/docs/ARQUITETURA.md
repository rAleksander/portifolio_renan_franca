# Arquitetura do Projeto: Portfolio Imersivo & Cinematográfico

## 1. Visão Geral
Este projeto transforma o portfólio de **Renan Aleksander** (Desenvolvedor Full Stack & Analista de Dados) em uma experiência web imersiva com temática espacial futurista e minimalista, mantendo as informações profissionais verdadeiras e os projetos reais: **DMT Áster (ERP)**, **RAOF Auto**, **Ninare**, **DMT AI Consulting** e projetos de **Análise de Dados**.

---

## 2. Estrutura de Diretórios

```text
cinematic_portfolio_redesign/
├── frontend/                     # Aplicação Web (Interface, 3D, Áudio e Animações)
│   ├── public/
│   │   ├── audio/
│   │   │   └── soundtrack.mp3    # Trilha sonora original (Venice - Scandinavianz)
│   │   └── img/                  # Fotos e capturas de tela reais
│   │       ├── renan.jpeg
│   │       ├── renan_perfil.jfif
│   │       ├── agenda.png
│   │       ├── dmt_logo.png
│   │       └── ninare.png
│   ├── src/
│   │   ├── animations/           # Linhas do tempo GSAP e transições cósmicas
│   │   ├── audio/                # Gerenciador de Web Audio API e analisador de frequências
│   │   ├── components/           # Componentes reutilizáveis (IntroScreen, Navbar, GlassCard, etc.)
│   │   ├── data/                 # Dados estruturados do profissional, projetos e habilidades
│   │   ├── hooks/                # Custom React hooks (useAudio, useScrollSpy, etc.)
│   │   ├── sections/             # Seções da página (Hero, About, Projects, Skills, Exp, Contact)
│   │   ├── styles/               # Configurações globais de CSS e Tailwind
│   │   ├── three/                # Motores de renderização Three.js (CosmicScene, StarField, Comets)
│   │   ├── App.jsx               # Orquestrador da experiência completa
│   │   └── main.jsx              # Ponto de entrada React
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── README.md
├── backend/                      # API leve para serviços de servidor (Formulário de Contato)
│   ├── src/
│   │   ├── app.js                # App Express com validação e rotas
│   │   └── server.js             # Inicialização do servidor HTTP
│   ├── tests/                    # Testes de integração da API
│   ├── package.json
│   └── README.md
├── docs/                         # Documentação técnica detalhada
│   ├── ARQUITETURA.md
│   ├── AUDIO_ANALYSIS.md
│   └── GUIA_EXECUCAO.md
├── .gitignore
└── README.md
```

---

## 3. Pilares Tecnológicos

- **Frontend:**
  - **React 18 & Vite:** Alta performance, componentização modular, HMR instantâneo.
  - **Three.js (WebGL):** Renderização da cena espacial em 3D — campo estelar estratificado com estrelas de magnitudes variadas, cometas com cauda de partículas na diagonal (superior direita para inferior esquerda), nebulosas volumétricas sutis e efeito de explosão de singularidade cósmica.
  - **GSAP (GreenSock) & ScrollTrigger:** Coreografia precisa da explosão de entrada em 4 fases (Singularidade, Expansão, Nascimento do Universo, Transição) e parallax suave ao rolar a página.
  - **Web Audio API:** Pipeline de áudio com `AudioContext`, `GainNode` e `AnalyserNode` para reatividade suave a graves sem travamento na renderização.
  - **Tailwind CSS & Glassmorphism:** Painéis de vidro fosco (`backdrop-blur-md`, bordas de 1px translúcidas com reflexos delicados) com alto contraste para garantir perfeita legibilidade sobre o espaço profundo.

- **Backend:**
  - **Node.js & Express:** Fornece o endpoint REST `POST /api/contact` com sanitização, validação de payload (nome, e-mail, assunto, mensagem) e resposta padronizada JSON.
  - O site é totalmente funcional como SPA independente (modo estático), mas se integra automaticamente ao backend quando disponível.
