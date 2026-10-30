# Guia de Execução Local e Testes

Este guia contém o passo a passo completo para executar e validar o ecossistema do portfólio.

---

## 1. Pré-requisitos
- **Node.js**: Versão 18 ou superior (Testado e validado em Node v24.20.0).
- **npm** ou **pnpm**.

---

## 2. Inicialização Rápida

### Opção A: Executar o Frontend (Modo Completo SPA)
Para visualizar a interface cinematográfica, Three.js, áudio e animações:

```bash
cd frontend
npm install
npm run dev
```

Acesse no navegador:
👉 `http://localhost:5173`

---

### Opção B: Executar Frontend + Backend (API de Contato)
Se desejar rodar também o servidor local para receber envios do formulário de contato:

**Terminal 1 (Backend):**
```bash
cd backend
npm install
npm start
```
*(O backend iniciará na porta 3001: `http://localhost:3001`)*

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```
*(O Vite possui proxy configurado para redirecionar requisições `/api` automaticamente para a porta 3001).*

---

## 3. Execução de Testes Automatizados

### Testes do Backend (API de Contato & Health Check):
```bash
cd backend
npm test
```
*Executa a suite nativa de testes com verificação de payload, rejeição de dados inválidos e endpoints de integridade.*

### Teste de Build do Frontend (Produção):
```bash
cd frontend
npm run build
```
*Compila todos os módulos React, Tailwind CSS e Three.js, garantindo zero erros de tipagem ou empacotamento.*

---

## 4. Comandos e Atalhos de Teclado
- **Espaço / Clique**: Alternar áudio ou pular animação quando ativados.
- **Scroll**: Navegação pelo universo com parallax em tempo real nas estrelas, cometas e painéis de vidro fosco.
- **Preferencia de Movimento Reduzido (`prefers-reduced-motion`)**: O site detecta automaticamente e ajusta a abertura cósmica de forma suave e instantânea.
