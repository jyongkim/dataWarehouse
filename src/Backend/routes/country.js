const express = require('express');
const router = express.Router();
const countryController = require('../controllers/country');

router.get('/:id', countryController.read)

module.exports = router;