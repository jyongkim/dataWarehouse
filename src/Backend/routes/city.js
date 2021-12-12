const express = require('express');
const router = express.Router();
const cityController = require('../controllers/city');

router.get('/:id', cityController.read)
router.post('/create', cityController.create)
router.put('/edit', cityController.edit)
router.delete('/delete/:id', cityController.delete)

module.exports = router;