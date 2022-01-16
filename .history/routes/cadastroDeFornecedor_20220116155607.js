const express = require('espress');
const router = express.router();
const cadastroFornecedorController = require('../controllers/cadastroFornecedorController')

router.get('/', cadastroFornecedorController.index);

module.exports = router;