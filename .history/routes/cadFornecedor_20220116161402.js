var express = require('express');
var router = express.Router();
const cadFornecedorController = require('../controllers/cadFornecedorController')

router.get('/', cadFornecedorController.index)

 
  module.exports = router;