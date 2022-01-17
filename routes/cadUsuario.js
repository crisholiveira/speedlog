const express = require('express')
const router = express.Router();
const cadUsuarioController = require('../controllers/cadUsuarioController')

router.get('/', cadUsuarioController.index)

module.exports = router;