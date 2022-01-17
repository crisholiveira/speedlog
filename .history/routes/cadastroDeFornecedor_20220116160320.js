var express = require('express');
var router = express.Router();
const cadastroDeFornecedorController = require('../controllers/cadastroDeFornecedorController')

router.get('/', cadastroDeFornecedorController.index);

module.exports = router;