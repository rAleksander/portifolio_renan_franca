export const portfolioData = {
  personal: {
    name: "Renan Aleksander",
    fullName: "Renan Aleksander de Oliveira França",
    role: "Desenvolvedor Full Stack & Analista de Dados",
    welcomeMessage: "Seja bem-vindo ao meu universo profissional.",
    secondaryPhrase: "Desenvolvimento de software de alta performance, inteligência de dados e soluções modernas.",
    shortBio: "Transformo dados complexos e requisitos de negócio em soluções digitais completas, funcionais e organizadas — combinando desenvolvimento full stack moderno (Python, Django, React, TypeScript), engenharia de dados (SQL, Power BI) e inteligência artificial.",
    openToWork: true,
    location: "Brasília, DF — Brasil",
    metrics: [
      { value: "37+", label: "Projetos desenvolvidos" },
      { value: "22+", label: "Clientes satisfeitos" },
      { value: "2+ anos", label: "Experiência prática" },
    ],
    avatar: "/img/renan.jpeg",
    avatarPerfil: "/img/renan_perfil.jfif",
  },

  services: [
    {
      id: "fullstack",
      title: "Desenvolvimento Full Stack",
      description: "Construção de aplicações web robustas e escaláveis de ponta a ponta. Arquitetura moderna no front-end (React, Tailwind CSS, TypeScript) e back-end sólido com Python (Django, FastAPI), Node.js e APIs RESTful.",
      icon: "Code",
      badge: "Core"
    },
    {
      id: "data-analytics",
      title: "Análise de Dados & BI",
      description: "Estruturação de bancos de dados, modelagem relacional, pipelines de dados e dashboards executivos no Power BI com DAX avançado, Power Query e SQL, transformando dados brutos em decisões estratégicas.",
      icon: "BarChart3",
      badge: "Especialidade"
    },
    {
      id: "automation-ai",
      title: "Automação & Inteligência Artificial",
      description: "Otimização de fluxos e rotinas com scripts em Python, Selenium, PyAutoGUI e n8n. Integração de modelos de IA e bases de conhecimento para acelerar a produtividade operacional.",
      icon: "Cpu",
      badge: "Inovação"
    }
  ],

  projects: [
    {
      id: "dmt-aster",
      title: "DMT Áster (Áster ERP)",
      category: "Full Stack & ERP Corporativo",
      description: "ERP monolítico modular corporativo desenvolvido para a DMT Data Consulting. Construído em monorepo pnpm com TypeScript e PostgreSQL via Drizzle ORM.",
      problem: "Necessidade de um sistema integrado de gestão para medição de contratos, faturamento, controle fiscal e contábil, eliminando planilhas fragmentadas.",
      contribution: "Desenvolvimento de módulos de ponta a ponta: Fiscal (Simples Nacional, Fator R, NFS-e), Projetos (alocação, timesheet e medição), Faturamento e Financeiro, além de integração com CRM via webhooks HMAC.",
      technologies: ["TypeScript", "Next.js / React", "PostgreSQL", "Drizzle ORM", "Docker", "Tailwind CSS"],
      image: "/img/dmt_logo.png",
      demoUrl: "https://dmtdataconsulting.com.br/",
      repoUrl: null,
      featured: true,
      status: "Em Produção / Ativo"
    },
    {
      id: "raof-auto",
      title: "RAOF Auto — Plataforma Automotiva",
      category: "Full Stack & E-Commerce",
      description: "Plataforma completa para catálogo, simulação de financiamento em tempo real (Tabela Price amortizada) e gestão de estoque de veículos.",
      problem: "Prover uma experiência fluida de compra de automóveis com filtros dinâmicos, fichas técnicas detalhadas e CRM interno para captação de propostas e leads.",
      contribution: "Arquitetura e desenvolvimento full stack: backend em Python Django 6 REST Framework com banco relacional SQLite/PostgreSQL e frontend reativo em React 19, Vite, Tailwind CSS e Lucide Icons.",
      technologies: ["Python", "Django REST", "React", "Vite", "Tailwind CSS", "Axios"],
      image: "/img/raof_auto.png",
      demoUrl: null,
      repoUrl: "https://github.com/rAleksander/Raof_Auto",
      featured: true,
      status: "Concluído & Documentado"
    },
    {
      id: "ninare",
      title: "Ninare — Plataforma Materno-Infantil",
      category: "Front-end & Presença Digital",
      description: "Landing page e plataforma institucional de alta performance desenvolvida para consolidar a presença digital de uma marca especializada em cuidados materno-infantis.",
      problem: "Apresentar a metodologia de cuidado de forma humanizada, rápida e estruturar o fluxo estratégico para conversão e agendamentos diretos.",
      contribution: "Desenvolvimento completo da interface moderna, responsiva e otimizada utilizando HTML semântico, Tailwind CSS e JavaScript nativo, com integração direta para atendimento via WhatsApp.",
      technologies: ["JavaScript", "Tailwind CSS", "HTML5 Semântico", "Performance Web"],
      image: "/img/ninare.png",
      demoUrl: "https://raleksander.github.io/Ninare/",
      repoUrl: "https://github.com/rAleksander/Ninare",
      featured: true,
      status: "Online / Ativo"
    },
    {
      id: "delivery-analytics",
      title: "Análise de Dados em Redes de Delivery",
      category: "Data Analytics & BI",
      description: "Estruturação, tratamento e visualização de dados de vendas e operações para empresas do setor alimentício e redes de entrega.",
      problem: "Dados dispersos entre plataformas de delivery dificultavam a visão consolidada de faturamento, horários de pico e desempenho de produtos.",
      contribution: "Desenvolvimento de pipelines de ETL em Python e Power Query, modelagem dimensional em banco relacional e elaboração de dashboards interativos no Power BI com DAX.",
      technologies: ["Python", "Power BI", "DAX", "Power Query", "SQL", "Pandas"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      demoUrl: null,
      repoUrl: "https://github.com/rAleksander",
      featured: false,
      status: "Concluído"
    },
    {
      id: "dmt-ai-consulting",
      title: "DMT · Artificial Intelligence Platform",
      category: "Full Stack & IA",
      description: "Evolução e sustentação de sistemas web em Inteligência Artificial na DMT Data Consulting.",
      problem: "Migração de protótipos internos construídos em Streamlit para uma arquitetura escalável e reutilizável para múltiplos clientes corporativos.",
      contribution: "Refatoração de interfaces para React, Tailwind CSS e JavaScript; criação de componentes modulares, integração de APIs e adequação de regras de negócio em PostgreSQL e Python.",
      technologies: ["Python", "JavaScript", "React", "PostgreSQL", "Node.js", "Tailwind CSS"],
      image: "/img/dmt_logo.png",
      demoUrl: "https://dmtdataconsulting.com.br/",
      repoUrl: null,
      featured: false,
      status: "Em Produção"
    }
  ],

  skills: {
    development: [
      { name: "Python", level: "Avançado", experience: "Uso profissional contínuo" },
      { name: "Django & DRF", level: "Avançado", experience: "Aplicações de produção e APIs" },
      { name: "JavaScript / ES6+", level: "Avançado", experience: "Desenvolvimento web nativo e SPAs" },
      { name: "React", level: "Intermediário/Avançado", experience: "Componentes modulares e interfaces" },
      { name: "TypeScript", level: "Intermediário", experience: "Tipagem estática e monorepos" },
      { name: "Node.js", level: "Intermediário", experience: "APIs e serviços backend" },
      { name: "Tailwind CSS", level: "Avançado", experience: "Sistemas de design e responsividade" },
      { name: "HTML5 & CSS3", level: "Avançado", experience: "Semântica, acessibilidade e flexbox/grid" }
    ],
    data: [
      { name: "SQL & PostgreSQL", level: "Avançado", experience: "Modelagem relacional e queries complexas" },
      { name: "Power BI & DAX", level: "Avançado", experience: "Dashboards analíticos e métricas" },
      { name: "Power Query & ETL", level: "Avançado", experience: "Limpeza e transformação de dados" },
      { name: "Excel Avançado", level: "Avançado", experience: "Fórmulas, tabelas dinâmicas e modelagem" },
      { name: "Pandas & Python Data", level: "Intermediário/Avançado", experience: "Manipulação e análise de DataFrames" }
    ],
    automationAndAI: [
      { name: "Inteligência Artificial & ML", level: "Em aperfeiçoamento", experience: "Técnico em IA no SENAC em andamento" },
      { name: "Selenium & PyAutoGUI", level: "Intermediário/Avançado", experience: "Web scraping e automação desktop" },
      { name: "n8n", level: "Intermediário", experience: "Automação de fluxos e webhooks" },
      { name: "APIs REST & Webhooks", level: "Avançado", experience: "Consumo e integração de serviços" }
    ],
    practices: [
      { name: "Git & GitHub", level: "Avançado", experience: "Controle de versão, branches e code review" },
      { name: "Scrum & Metodologias Ágeis", level: "Intermediário", experience: "Sprints, demandas e reuniões de alinhamento" },
      { name: "Spec-Driven Development (SDD)", level: "Intermediário", experience: "Especificação rigorosa antes da implementação" },
      { name: "Docker", level: "Intermediário", experience: "Containerização de ambientes" }
    ]
  },

  experience: [
    {
      period: "02/2026 – Atual",
      role: "Desenvolvedor Full Stack",
      company: "DMT Data Consulting",
      location: "Brasília, DF",
      description: "Desenvolvimento e evolução de funcionalidades de aplicações web envolvendo software, dados e inteligência artificial. Atuação no front-end e back-end com Python, Django, JavaScript, Node, HTML, CSS e Tailwind CSS. Reconstrução e migração de interfaces Streamlit para web moderna, preservando regras de negócio e tornando módulos reutilizáveis para múltiplos clientes sob práticas de Scrum e SDD."
    },
    {
      period: "08/2023 – Atual",
      role: "Analista de Dados e Automação",
      company: "RAOF Tech",
      location: "Brasília, DF",
      description: "Organização, tratamento e estruturação de dados de vendas e operações do setor alimentício. Desenvolvimento de relatórios e dashboards no Power BI com DAX para indicadores de faturamento e desempenho. Tratamento de dados com Python e Power Query, além de desenvolvimento de scripts de automação com Selenium, PyAutoGUI e n8n para otimização de rotinas operacionais."
    }
  ],

  education: [
    {
      title: "Pós-Graduação em Análise de Dados",
      institution: "Centro Universitário União das Américas",
      period: "Concluído em 2026",
      type: "Pós-Graduação Lato Sensu"
    },
    {
      title: "Tecnólogo em Sistemas para Internet",
      institution: "Universidade Anhembi Morumbi",
      period: "Concluído em 2025",
      type: "Ensino Superior Tecnológico"
    },
    {
      title: "Técnico em Inteligência Artificial",
      institution: "SENAC",
      period: "Em andamento (Previsão: Dezembro/2027)",
      type: "Formação Técnica Especializada"
    }
  ],

  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Intermediário (B1)" },
    { name: "Espanhol", level: "Básico (A1)" }
  ],

  reviews: [
    {
      name: "Lucas Wilian",
      location: "Taguatinga, DF",
      content: "Ótimo profissional. Entrega soluções bem planejadas e com código muito limpo.",
      rating: 5
    },
    {
      name: "Jovacir Azevedo",
      location: "Brasília, DF",
      content: "Renan demonstra facilidade para aprender novas tecnologias e transformar conceitos em soluções práticas. Tem uma abordagem bastante orientada à resolução de problemas.",
      rating: 5
    },
    {
      name: "Sandra Lima",
      location: "São Paulo, SP",
      content: "Tínhamos um prazo curto e uma ideia ainda pouco definida. Renan conseguiu transformar o conceito em uma solução organizada e funcional, aplicando seus conhecimentos de tecnologia, dados e desenvolvimento com bastante autonomia.",
      rating: 5
    }
  ],

  social: {
    github: "https://github.com/rAleksander",
    githubRepos: "https://github.com/rAleksander?tab=repositories",
    linkedin: "https://www.linkedin.com/in/francarenan/",
    email: "renan.aleksander1@gmail.com",
    phone: "(61) 99574-4887",
    whatsapp: "https://wa.me/5561995744887?text=Olá%20Renan!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
  }
};
