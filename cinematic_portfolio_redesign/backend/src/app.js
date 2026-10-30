import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'O campo Nome é obrigatório.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'E-mail inválido ou não fornecido.' });
  }

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'O campo Mensagem é obrigatório.' });
  }

  // Simulated logging / email queue
  console.log('[Contact Message Received]', {
    name: name.trim(),
    email: email.trim(),
    subject: subject ? subject.trim() : 'Sem assunto',
    message: message.trim(),
    receivedAt: new Date().toISOString()
  });

  return res.status(200).json({
    success: true,
    message: 'Mensagem enviada com sucesso!'
  });
});
