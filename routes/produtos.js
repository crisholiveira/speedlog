var express = require('express');
var router = express.Router();
const produtosController = require('../controllers/produtosController')

router.get('/', produtosController.index)

 
  module.exports = router;