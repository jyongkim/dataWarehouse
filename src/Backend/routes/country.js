const express = require('express');
const router = express.Router();
const countryController = require('../controllers/country');

router.get('/:id', countryController.read)
router.post('/create', countryController.create)
router.put('/edit', countryController.edit)
router.delete('/delete/:id', countryController.delete)

module.exports = router;