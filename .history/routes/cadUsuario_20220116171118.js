const express = require('express')
const router = express.router();
const cadUsuarioController = require('../controllers/cadUsuarioController')

router.get('/', cadUsuarioController.index)

module.exports = router;