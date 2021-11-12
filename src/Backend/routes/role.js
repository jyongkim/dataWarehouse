const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role');

router.get('/', roleController.read)

module.exports = router;