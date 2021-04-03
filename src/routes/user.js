const router = require('express').Router();
const userController = require('../controllers/user');
router.post('/', userController.create)
router.get('/', userController.read)
router.get('/:id', userController.find)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

module.exports = router;