const express = require('express');
const router = express.Router();
const mongoose = require('../config/database');

// Rota para testar a conexão com o banco de dados
router.get('/test-connection', async (req, res) => {
  try {
    // Verifica o estado da conexão
    const state = mongoose.connection.readyState;
    if (state === 1) { // 1 significa "connected"
      res.status(200).json({ message: 'Conexão com o banco de dados bem-sucedida' });
    } else {
      res.status(500).json({ message: 'Erro ao conectar com o banco de dados', state });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao conectar com o banco de dados', error });
  }
});

module.exports = router;
