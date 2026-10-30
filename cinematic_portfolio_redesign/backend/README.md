# Backend — Portfólio API

Serviço REST em Node.js e Express para suporte ao formulário de contato e expansões futuras.

## Endpoints
- `GET /api/health` — Verifica o status da API.
- `POST /api/contact` — Recebe mensagens do formulário com validação de campos obrigatórios (`name`, `email`, `message`).

## Como Executar
```bash
npm install
npm start
```
Executa na porta 3001.

## Testes Automatizados
```bash
npm test
```
Executa a suíte de testes com asserções estritas e servidor de testes em memória.
