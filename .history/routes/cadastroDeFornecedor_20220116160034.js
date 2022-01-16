const express = require('espress');
const router = express.router();
const cadastroDeFornecedorController = require('../controllers/cadastroDeFornecedorController')

router.get('/', cadastroDeFornecedorController.index);

module.exports = router;