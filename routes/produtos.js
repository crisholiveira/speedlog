var express = require('express');
var router = express.Router();
const produtosController = require('../controllers/produtosController')

router.get('/', produtosController.index)
router.get('/ver/:id', produtosController.findByCod)
router.get('/search', produtosController.search)
router.get('/cadastro', produtosController.create)
router.post('/cadastro', produtosController.store)


 
  module.exports = router;