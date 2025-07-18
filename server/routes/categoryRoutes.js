const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Public
router.get('/', categoryController.getAllCategories);

// Protected
router.post('/', categoryController.createCategory);

module.exports = router;
