const express = require('express');
const router = express.Router();
const regionController = require('../controllers/region');

router.get('/', regionController.read)
router.get('/tree', regionController.getTree)
router.post('/create', regionController.create)
router.put('/edit', regionController.edit)
router.delete('/delete/:id', regionController.delete)

module.exports = router;