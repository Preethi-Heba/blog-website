const Blog = require("../models/Blog");

// Get all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create blog
const createBlog = async (req, res) => {
  console.log(req.body);

  try {
    const blog = await Blog.create(req.body);
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

// Update blog
const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete blog
const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);

    res.json({
      message: "Blog Deleted Successfully",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};