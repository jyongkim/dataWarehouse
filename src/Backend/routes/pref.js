const express = require('express');
const router = express.Router();
const prefController = require('../controllers/pref');
    // El ID hace referencia al id_contact.
    router.post('/:id', prefController.create)
    router.get('/:id', prefController.read)
    // El ID hace referencia al id_pref.
    router.put('/:id', prefController.update)
    router.delete('/:id', prefController.delete)

module.exports = router;