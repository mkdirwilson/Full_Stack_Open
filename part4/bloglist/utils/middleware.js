// import the logger  js file
const logger = require('./logger');

// definer a requestLogger helper function for logging api requests
const requestLogger = (request, response, next) => {
  logger.info('Method: ', request.method);
  logger.info('Path: ', request.path);
  logger.info('Body: ', request.body);
  logger.info('---');
  next();
};

// define unknowEndpoint error function for handling to undefined api endpoints
const unknownEndpoint = (request, response) => {
  response.status(404).send({
    error: 'unknown endpoint',
  });
};

// define a error handling function for handling bad requests
// eslint-disable-next-line consistent-return
const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({
      error: 'malformated id',
    });
  }

  if (error.name === 'ValidationError') {
    return response.status(400).json({
      error: error.message,
    });
  }

  next(error);
};

// exporting the defined functions
module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
};
