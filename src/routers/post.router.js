const express = require('express');
const { postController } = require('../controllers');
const authToken = require('../middlewares/validateToken');

const router = express.Router();

router.get('/', authToken, postController.getAllPosts);
router.get('/:id', authToken, postController.getPostById);
router.post('/', authToken, postController.createPost);

module.exports = router;