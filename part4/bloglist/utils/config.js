// import the dotenv library
require('dotenv').config();

// initialise PORT variable and assign value to the PORT value from the env
const { PORT } = process.env;

// initialise the mongo url and assign value to the url defined in the env
const { MONGODB_URI } = process.env;

// export the PORT and MONGODB urls
module.exports = { PORT, MONGODB_URI };
