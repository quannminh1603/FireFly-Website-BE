const express = require('express');
const router = express.Router()
const CategoryController = require('../controllers/CategoryController')
const { authMiddleware } = require('../middleware/authMiddleware')

router.post('/create', CategoryController.createCategory)
router.put('/update/:id', authMiddleware, CategoryController.updateCategory)
router.delete('/delete/:id', authMiddleware, CategoryController.deleteCategory)
router.get('/findAll', CategoryController.getAllCategory)
router.get('/getById/:id', CategoryController.getCategoryById)

module.exports = router