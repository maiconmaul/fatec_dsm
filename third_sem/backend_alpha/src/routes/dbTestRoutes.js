const express = require('express');
const router = express.Router();
const mongoose = require('../config/database');

router.get('/test-connection', async (req, res) => {
  try {
    const state = mongoose.connection.readyState;
    if (state === 1) {
      res.status(200).json({ message: 'Conexão com o banco de dados bem-sucedida' });
    } else {
      res.status(500).json({ message: 'Erro ao conectar com o banco de dados', state });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao conectar com o banco de dados', error });
  }
});

module.exports = router;
