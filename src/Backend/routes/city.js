const express = require('express');
const router = express.Router();
const cityController = require('../controllers/city');

router.get('/:id', cityController.read)

module.exports = router;