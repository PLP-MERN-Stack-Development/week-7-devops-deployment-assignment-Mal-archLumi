const Post = require('../models/Post');
const Category = require('../models/Category');

exports.getAllPosts = async (req, res) => {
  const { page = 1, limit = 10, category } = req.query;
  const query = category ? { category } : {};
  const posts = await Post.find(query).populate('category')
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
  res.json(posts);
};

exports.getPost = async (req, res) => {
  const { idOrSlug } = req.params;
  const post = await Post.findOne({ $or: [{ _id: idOrSlug }, { slug: idOrSlug }] }).populate('category');
  if (!post) return res.status(404).json({ message: 'Post not found' });
  res.json(post);
};

exports.createPost = async (req, res) => {
  const { title, content, category } = req.body;
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  const post = await Post.create({ title, content, category, slug });
  res.status(201).json(post);
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const updated = await Post.findByIdAndUpdate(id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Post not found' });
  res.json(updated);
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  const deleted = await Post.findByIdAndDelete(id);
  if (!deleted) return res.status(404).json({ message: 'Post not found' });
  res.json({ message: 'Post deleted' });
};

exports.addComment = async (req, res) => {
  const { postId } = req.params;
  const { user, text } = req.body;
  const post = await Post.findById(postId);
  if (!post) return res.status(404).json({ message: 'Post not found' });
  post.comments.push({ user, text });
  await post.save();
  res.json(post);
};

exports.searchPosts = async (req, res) => {
  const { q } = req.query;
  const posts = await Post.find({ title: new RegExp(q, 'i') });
  res.json(posts);
};
