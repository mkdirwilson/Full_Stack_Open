/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const url = process.env.MONGODB_URI;

console.log('connecting to', url);

mongoose.connect(url)
  .then((result) => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },

  // custome validation
  number: {
    type: String,
    minLength: 8,
    validate: {
      validator: (value) => /^[0-9]{2,3}-[0-9]+$/.test(value),
      message: (props) => `${props.value} is not a valid phone number format.`,
    },
    required: true,
  },
});

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject._v;
  },
});

module.exports = mongoose.model('Person', personSchema);
