# 🌌 Renan Aleksander — Universo Cinematográfico & Portfólio Profissional

<div align="center">

![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js)
![GSAP](https://img.shields.io/badge/GSAP-Animations-green?style=for-the-badge&logo=greensock)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)
![Node.js](https://img.shields.io/badge/Node.js-Backend_API-339933?style=for-the-badge&logo=nodedotjs)
![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)

<p align="center">
  <strong>Uma experiência web cinematográfica, interativa e imersiva inspirada na estética do espaço profundo e nas melhores práticas do design contemporâneo.</strong>
</p>

[Visão Geral](#-visão-geral) •
[Destaques da Experiência](#-destaques-da-experiência) •
[Projetos Reais](#-projetos-em-destaque) •
[Arquitetura](#-estrutura-do-projeto) •
[Como Executar](#-como-executar-localmente) •
[Testes](#-testes-e-validação) •
[Autor](#-autor)

---

</div>

## 🪐 Visão Geral

Este projeto é uma reconstrução completa do portfólio pessoal de **Renan Aleksander** (Desenvolvedor Full Stack & Analista de Dados). A aplicação transcende a estrutura convencional de um portfólio estático, transformando-o em um **universo espacial cinematográfico**, combinando renderização 3D em tempo real com WebGL, animações fluidas coreografadas, reatividade a áudio lo-fi via Web Audio API e painéis de *glassmorphism* de alto contraste.

Todas as informações profissionais, históricas, acadêmicas e de projetos presentes no projeto são **100% reais e verificáveis**.

---

## ✨ Destaques da Experiência

### 1. 🎬 Tela Inicial com Abertura Cinematográfica
- Composição minimalista com foco tipográfico, espaço negativo e presença marcante.
- Apresentação do nome profissional, posicionamento e frase de impacto.
- **Controle prévio de trilha sonora:** O visitante pode escolher iniciar a jornada com o áudio ativado ou em silêncio absoluto.
- Opção de pular a introdução para recrutadores e visitantes que desejam consultar os dados diretamente.

### 2. 💥 Explosão Cósmica Coreografada (4 Fases)
Orquestrada com precisão milimétrica via **GSAP Timeline** e shaders de partículas WebGL:
- **Fase A — Singularidade:** Um ponto concentrado de luz branca pura surge no centro da tela e intensifica seu brilho.
- **Fase B — Expansão Tridimensional:** Dispersão energética de 1.800 partículas com ondas de choque radiais propagando-se em direção à câmera.
- **Fase C — Nascimento do Universo:** As partículas desaceleram e revelam o vasto campo estelar e nebulosas de fundo.
- **Fase D — Transição Contínua:** A câmera estabiliza suavemente e os componentes do portfólio aparecem sem cortes bruscos ou recarregamento.
- **Acessibilidade:** Compatibilidade nativa com `prefers-reduced-motion` do sistema operacional.

### 3. 🌠 Cenário Espacial 3D Persistente (Three.js)
- **Campo Estelar 360° (4.200 estrelas):** Distribuição esférica contínua sem quebras ou faixas pretas em qualquer aspecto ou resolução (Full HD, 2K, 4K e monitores Ultrawide).
- **Nebulosas Volumétricas Orgânicas:** 80 nuvens cósmicas cilíndricas com respiração e pulso suave em tons de ciano, índigo e violeta.
- **Cometas Diagonais:** Cruzam a tela espaçadamente da região superior direita para a inferior esquerda com caudas luminosas de partículas.
- **Parallax Cósmico:** Reação sutil ao movimento do cursor e à rolagem vertical da página.

### 4. 🎵 Áudio Lo-Fi & Reatividade Espectral
- **Faixa Sonora:** *Venice* — Scandinavianz (Royalty Free / Sem Copyright).
- **Web Audio API:** Pipeline de áudio com `AudioContext`, `GainNode` e `AnalyserNode`.
- **Análise em Tempo Real de Graves (20 Hz a 180 Hz):** Suavização exponencial (*lerp*) que modula sutilmente o brilho das nebulosas e estrelas sem causar tremores na interface.
- **Controles Persistentes:** Barra de controle no topo com play/pause, mudo/som, equalizador visual animado e controle deslizante de volume.
- **Loop Suave:** Transição de fim de faixa sem reinícios abruptos durante a navegação entre seções.

### 5. 💎 Design System & Glassmorphism
- Painéis translúcidos em vidro fosco (`backdrop-blur-md`, bordas de 1px reflexivas com transparência sutil).
- Alto contraste e tipografia refinada (**Space Grotesk** para títulos e **Inter** para leitura), assegurando legibilidade impecável sobre o cenário espacial.

---

## 💼 Projetos em Destaque

| Projeto | Categoria | Tecnologias Principais | Descrição & Contribuição |
| :--- | :--- | :--- | :--- |
| **DMT Áster (ERP)** | *Full Stack & ERP Corporativo* | TypeScript, Next.js, PostgreSQL, Drizzle ORM, Docker | ERP monolítico modular da DMT Data Consulting. Desenvolvimento de ponta a ponta dos módulos **Fiscal** (Simples Nacional, Fator R, NFS-e), **Projetos** (timesheet, apontamento e medição), **Faturamento** e **Financeiro**, além de webhooks HMAC para integração com CRM. |
| **RAOF Auto** | *Full Stack & E-Commerce* | Python, Django 6 REST, React 19, Tailwind CSS, Axios | Plataforma de catálogo, ficha técnica completa e simulação de financiamento em tempo real (Tabela Price com amortização de juros compostos), com CRM interno para gestão de leads e propostas. |
| **Ninare** | *Front-End & Presença Digital* | JavaScript nativo, Tailwind CSS, HTML5 Semântico | Landing page institucional de alta performance para consolidação da presença digital de marca materno-infantil, com funil de conversão estratégica direto para WhatsApp. |
| **Delivery Analytics** | *Data Analytics & BI* | Power BI, DAX, Python, SQL, Power Query, Pandas | Pipelines de ETL, modelagem dimensional e dashboards executivos interativos para acompanhamento de faturamento, horários de pico e indicadores operacionais de redes de delivery. |
| **DMT AI Platform** | *Full Stack & IA* | React, Python, PostgreSQL, Node.js, Tailwind CSS | Evolução e refatoração de produtos digitais com IA, migrando interfaces prototipadas em Streamlit para arquitetura web escalável em React com componentes reutilizáveis. |

---

## 📁 Estrutura do Projeto

```text
cinematic_portfolio_redesign/
├── frontend/                        # Interface de usuário, Three.js, áudio e animações
│   ├── public/
│   │   ├── audio/
│   │   │   └── soundtrack.mp3       # Trilha sonora original (Venice - Scandinavianz)
│   │   └── img/                     # Imagens e capturas reais dos projetos
│   │       ├── renan.jpeg
│   │       ├── renan_perfil.jfif
│   │       ├── agenda.png
│   │       ├── dmt_logo.png
│   │       └── ninare.png
│   ├── src/
│   │   ├── animations/
│   │   │   └── cosmicExplosion.js   # Timeline GSAP da explosão em 4 fases
│   │   ├── audio/
│   │   │   └── AudioManager.js       # Singleton Web Audio API & Analyser
│   │   ├── components/
│   │   │   ├── AudioController.jsx  # Player persistente de áudio
│   │   │   ├── CinematicCanvas.jsx  # Container reativo do Canvas WebGL
│   │   │   ├── IntroScreen.jsx      # Tela de abertura independente
│   │   │   └── Navbar.jsx           # Cabeçalho com navegação e scroll spy
│   │   ├── data/
│   │   │   └── portfolioData.js     # Dados consolidados e verificáveis
│   │   ├── hooks/
│   │   │   ├── useAudio.js          # Hook reativo de estado de áudio
│   │   │   └── useScrollSpy.js      # Detecção inteligente da seção ativa
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx      # Apresentação, foto com glow e métricas
│   │   │   ├── AboutSection.jsx     # Trajetória, serviços e princípios
│   │   │   ├── ProjectsSection.jsx  # Grid de projetos com filtros dinâmicos
│   │   │   ├── SkillsSection.jsx    # Habilidades categorizadas por domínio
│   │   │   ├── ExperienceSection.jsx# Linha do tempo de carreira e formação
│   │   │   └── ContactSection.jsx   # Canais diretos e formulário com validação
│   │   ├── styles/
│   │   │   └── index.css            # Glassmorphism, Tailwind e reset global
│   │   ├── three/
│   │   │   ├── CosmicScene.js       # Orquestrador de cena, câmera e render loop
│   │   │   ├── StarField.js         # 4.200 estrelas esféricas em 360°
│   │   │   ├── Comets.js            # Cometas diagonais e caudas de partículas
│   │   │   ├── NebulaClouds.js      # Nuvens volumétricas com pulso orgânico
│   │   │   └── ExplosionEffect.js   # Singularidade e expansão de energia
│   │   ├── App.jsx                  # Raiz da aplicação
│   │   └── main.jsx                 # Entrada Vite/React
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── backend/                         # API REST para suporte a formulário e integrações
│   ├── src/
│   │   ├── app.js                   # Rotas Express com validação de payload
│   │   └── server.js                # Inicialização do servidor HTTP
│   ├── tests/
│   │   └── contact.test.js          # Testes automatizados da API
│   ├── package.json
│   └── README.md
├── docs/                            # Documentação técnica aprofundada
│   ├── ARQUITETURA.md               # Detalhamento de arquitetura e decisões
│   ├── AUDIO_ANALYSIS.md            # Análise acústica e técnica da trilha sonora
│   └── GUIA_EXECUCAO.md             # Passo a passo de execução e deploy
├── iniciar_site.bat                 # Script de execução rápida no Windows (1 clique)
├── .gitignore
└── README.md
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js** (v18 ou superior — testado e validado em Node v24).
- **npm** ou gerenciador de pacotes equivalente.

---

### Opção 1: Execução em 1 Clique (Windows)
Basta dar dois cliques no arquivo:
```cmd
iniciar_site.bat
```
Ele instalará as dependências caso necessário, iniciará o servidor Vite e abrirá automaticamente o navegador em `http://localhost:5173`.

---

### Opção 2: Execução Manual via Terminal

#### 1. Iniciar o Frontend:
```bash
cd frontend
npm install
npm run dev
```
👉 Acesse no navegador: **`http://localhost:5173`**

#### 2. Iniciar o Backend (Opcional — API de Contato):
```bash
# Em outro terminal:
cd backend
npm install
npm start
```
👉 API rodando em: **`http://localhost:3001`** *(O Vite possui proxy reverso configurado automaticamente para encaminhar requisições `/api` para a porta 3001).*

---

## 🧪 Testes e Validação

### Teste de Build do Frontend (Produção):
```bash
cd frontend
npm run build
```
> Executa a minificação, compilação de shaders Three.js, bundle de estilos Tailwind e empacotamento completo via Vite.

### Testes Automatizados do Backend:
```bash
cd backend
npm test
```
> Executa a suite de testes nativa do Node (`node:test`) validando health check, envio de propostas válidas e rejeição estrita de payloads incompletos ou e-mails inválidos.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** — Biblioteca declarativa para interfaces modulares.
- **Vite 5** — Ferramenta de build de altíssima performance com HMR instantâneo.
- **Three.js** — Renderização gráfica acelerada por hardware via WebGL.
- **GSAP 3 (GreenSock)** — Coreografia de timelines cinematográficas e animações complexas.
- **Tailwind CSS 3.4** — Utility-first CSS com configuração sob medida para estética espacial e glassmorphism.
- **Lucide React** — Conjunto elegante de ícones vetoriais em SVG.
- **Web Audio API** — Processamento de áudio com `AnalyserNode` para reatividade espectral.

### Backend
- **Node.js & Express** — Servidor web leve e seguro.
- **CORS** — Middleware para requisições cross-origin controladas.
- **Node Test Runner (`node:test`)** — Testes automatizados sem necessidade de dependências pesadas de terceiros.

---

## 👨‍💻 Autor

**Renan Aleksander de Oliveira França**  
*Desenvolvedor Full Stack & Analista de Dados*

- 🌐 **LinkedIn:** [linkedin.com/in/francarenan](https://www.linkedin.com/in/francarenan/)
- 💻 **GitHub:** [github.com/rAleksander](https://github.com/rAleksander)
- 📧 **E-mail:** [renan.aleksander1@gmail.com](mailto:renan.aleksander1@gmail.com)
- 📱 **WhatsApp:** [+55 (61) 99574-4887](https://wa.me/5561995744887)

---

<div align="center">
  <sub>Desenvolvido com foco em excelência técnica, rigor de engenharia de software e experiência visual cinematográfica. ⭐</sub>
</div>
