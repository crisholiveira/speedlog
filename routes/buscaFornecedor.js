const express = require('express');
const router = express.Router();
const buscaFornecedorController = require('../controllers/buscaFornecedorController')

router.get('/', buscaFornecedorController.index)

module.exports = router;
