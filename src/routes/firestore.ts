import express from 'express';

import {firestore} from '../firebase/firebaseConfig'; // Importando a instância do Firestore
import { collection, getDocs } from 'firebase/firestore';

const router = express.Router();

router.get('/', async (req, res) => {
     try {
    const usuariosRef = collection(firestore, 'usuarios');        

    const snapshot = await getDocs(usuariosRef); 

    const usuarios = [] as any[]; // Declare the array with a specific type
    snapshot.forEach(doc => {
      usuarios.push({ id: doc.id, ...doc.data() });
    });

    res.json(usuarios);
    console.log(usuarios);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ erro: 'Erro ao buscar usuários' });
  }
});

export default router;