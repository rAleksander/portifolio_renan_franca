import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { app } from '../src/app.js';

let server;
let baseUrl;

test.before(async () => {
  await new Promise((resolve) => {
    server = http.createServer(app);
    server.listen(0, '127.0.0.1', () => {
      const port = server.address().port;
      baseUrl = `http://127.0.0.1:${port}`;
      resolve();
    });
  });
});

test.after(async () => {
  await new Promise((resolve) => server.close(resolve));
});

test('GET /api/health returns 200 and status ok', async () => {
  const res = await fetch(`${baseUrl}/api/health`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.status, 'ok');
  assert.ok(data.timestamp);
});

test('POST /api/contact succeeds with valid payload', async () => {
  const payload = {
    name: 'Recrutador Tech',
    email: 'recrutador@empresa.com',
    subject: 'Oportunidade Desenvolvedor Full Stack',
    message: 'Olá Renan, gostamos muito do seu perfil e portfólio!'
  };

  const res = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.success, true);
  assert.equal(data.message, 'Mensagem enviada com sucesso!');
});

test('POST /api/contact fails when name is missing', async () => {
  const payload = {
    email: 'recrutador@empresa.com',
    message: 'Mensagem sem nome'
  };

  const res = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  assert.equal(res.status, 400);
  const data = await res.json();
  assert.equal(data.error, 'O campo Nome é obrigatório.');
});

test('POST /api/contact fails when email is invalid', async () => {
  const payload = {
    name: 'Lucas',
    email: 'email_invalido',
    message: 'Testando email invalido'
  };

  const res = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  assert.equal(res.status, 400);
  const data = await res.json();
  assert.equal(data.error, 'E-mail inválido ou não fornecido.');
});

test('POST /api/contact fails when message is missing', async () => {
  const payload = {
    name: 'Lucas',
    email: 'lucas@gmail.com',
    message: ''
  };

  const res = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  assert.equal(res.status, 400);
  const data = await res.json();
  assert.equal(data.error, 'O campo Mensagem é obrigatório.');
});
