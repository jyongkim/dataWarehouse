const express = require('express');
const router = express.Router();
const regionController = require('../controllers/region');

router.get('/', regionController.read)
router.get('/tree', regionController.getTree)

module.exports = router;