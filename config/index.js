const keys = require('./keys');

module.exports = {
  SECRET: keys.jwtSecret,
  DB: keys.mongoURI,
};
