const express = require('express');
const router = express.Router();

// Example GET /api/posts
router.get('/', (req, res) => {
  res.json([
    { _id: 1, title: 'First post', content: 'Hello world' }
  ]);
});

module.exports = router;
