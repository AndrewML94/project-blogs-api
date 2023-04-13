const express = require('express');
const { postController } = require('../controllers');
const authToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', authToken, postController.createPost);

module.exports = router;