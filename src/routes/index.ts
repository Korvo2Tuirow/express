import express from 'express';

import produtosRouter from './produtos';// Importando as rotas de produtos
import voosRouter from './voos';// Importando as rotas de voos
import firestoreRouter from './firestore';// Importando as rotas do Firebase
import realtimeRouter from './realtime';
import Middleware from '../middlewares/middleware';

const router = express.Router();

//router.use(Middleware);// Aplicando o middleware globalmente

router.use('/produtos', produtosRouter);// Registrando as rotas de produtos sob o prefixo '/produtos'
router.use('/voos', voosRouter);// Registrando as rotas de voos sob o prefixo '/voos'

router.use('/firestore', firestoreRouter);// Registrando as rotas do Firebase sob o prefixo '/firebase'

router.use('/realtime', realtimeRouter);// Registrando as rotas do Realtime Database sob o prefixo '/realtime'

// Rota simples
router.get('/', (req, res) => {
  const agora = new Date();
  const dataFormatada = agora.toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo'
  });

  res.json([
    {
      message: 'Bem-vindo à API de Exemplo!',
      autor: 'Korvo Tuirow e CHAT-GPT',
      data: dataFormatada,
    },
    {
      routes: {
        produtos: '/produtos',
        voos: '/voos/:from/:to',
        firestore: '/firestore',
        realtime: '/realtime'
      }
    }
  ]);


});

// Rota de teste
router.get('/teste', (req, res) => {
  res.json({
    message: 'Rota de teste funcionando!',
  })
});

export default router;