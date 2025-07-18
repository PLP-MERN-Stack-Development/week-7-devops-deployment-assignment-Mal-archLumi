const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Public routes
router.get('/', postController.getAllPosts);
router.get('/search', postController.searchPosts);
router.get('/:idOrSlug', postController.getPost);

// Protected routes (you can add auth middleware later)
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.post('/:postId/comments', postController.addComment);

module.exports = router;
