/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */

// import the mongoose library
const mongoose = require('mongoose');

// define blog schema
const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

// convert the id objects in the blog to string and delete the default id and v objects
blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject._v;
  },
});

// export the blog schema
module.exports = mongoose.model('Blog', blogSchema);
