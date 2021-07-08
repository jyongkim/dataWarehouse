const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company');
    // El ID hace referencia al id_user.
    // router.post('/:id', companyController.create)
 router.get('/:id', companyController.read)
    // // El ID hace referencia al id_company.
    // router.put('/:id', companyController.update)
    // router.delete('/:id', companyController.delete)

module.exports = router;