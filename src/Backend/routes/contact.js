const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact');
    // El ID hace referencia al id_company.
    router.post('/:id', contactController.create)
    router.get('/:id', contactController.read)
    // El ID hace referencia al id_contact.
    router.put('/:id', contactController.update)
    router.delete('/:id', contactController.delete)

module.exports = router;