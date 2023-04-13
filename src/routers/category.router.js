const express = require('express');
const { categoryController } = require('../controllers');
const authToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');

const router = express.Router();

router.get('/', authToken, categoryController.getAllCategories);
router.post('/', authToken, validateName, categoryController.createCategory);

module.exports = router;