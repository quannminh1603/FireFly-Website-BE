const express = require('express')
const router = express.Router()
const userController = require('../controllers/UserController')
const { authMiddleware } = require('../middleware/authMiddleware')

router.post('/', userController.createUser)
router.post('/login', userController.loginUser)
router.put('/update-user/:id', userController.updateUser)
router.delete('/delete-user/:id', authMiddleware, userController.deleteUser)
router.get('/getAll',authMiddleware, userController.getAllUser)
router.get('/get-details/:id', userController.getDetailsUser)
// router.get('/get-details/:id', authMiddleware, userController.getDetailsUser)

module.exports = router;