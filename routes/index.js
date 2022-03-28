var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

router.get('/', indexController.index)
router.post('/', indexController.loguin)

 
  module.exports = router;