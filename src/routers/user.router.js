const express = require('express');
const { userController } = require('../controllers');
const authToken = require('../middlewares/validateToken');

const router = express.Router();

router.get('/', authToken, userController.getAllUsers);
router.get('/:id', authToken, userController.getUserById);
router.post('/', userController.createUser);

module.exports = router;