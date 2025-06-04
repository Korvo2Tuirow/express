import express from 'express';

const router = express.Router();

// Rota simples
router.get('/', (req, res) => {
  const agora = new Date();
  const dataFormatada = agora.toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo'
  });
  res.json({
    message: 'Bem-vindo à API de Exemplo!',
    autor: 'Korvo Tuirow e CHAT-GPT',
    data: dataFormatada,
  });
});

router.get('/teste', (req, res) => {
    res.json({
        message: 'Rota de teste funcionando!',
    })
})


export default router;