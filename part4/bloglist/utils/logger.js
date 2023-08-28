// initialise info function  for logging information to the console
const info = (...params) => {
  console.log(...params);
};

// initialise error for logging error information
const error = (...params) => {
  console.error(...params);
};

module.exports = { info, error };
