import express from 'express';

const router = express.Router();

// Rota dinâmica com parâmetro de consulta (query string)
router.get('/:from/:to', (req, res) => {
  const { from, to } = req.params; // Desestruturação dos parâmetros da rota ROTA DINÂMICA

  console.log('PARAMS', req.params);
  console.log('QUERY', req.query);
  console.log('BODY', req.body);

  res.json({
    flight: {
      from: from.toUpperCase(),
      to: to.toUpperCase(),
      price: 2546.55
    }
  });
});

export default router;