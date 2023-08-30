/* eslint-disable no-undef */

// import the express router middleware and bloglish schema
const blogRouter = require('express').Router();
const Blog = require('../models/bloglist');

// configure get router to fetch all blogs
blogRouter.get('/', (request, response) => {
  Blog.find({})
    .then((blog) => {
      response.json(blog);
    });
});

// configure post router to save a new blog entry
blogRouter.post('/', (request, response) => {
  const { body } = request;

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  });

  blog.save()
    .then((savedBlog) => {
      response.json(savedBlog);
    })
    .catch((error) => next(error));
});

// export the blogRouter
module.exports = blogRouter;
