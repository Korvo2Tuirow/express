import express from "express";

const router = express.Router();

// Rota simples
router.get('/', (req, res) => {
    res.json({ produtos:[]});
});

// Rota Dinâmicas com query params
router.get('/:id', (req, res) => {
  console.log(req.params.id); // Acessa o parâmetro id da rota ROTA DINÂMICA
  res.json({
    id: req.params.id,
    nome: `Tecaldo Query`,
    valor: 100.00, 
  
  });
});

export default router;