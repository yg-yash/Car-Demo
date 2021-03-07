const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose
  .connect(keys.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('mongodb connected');
  })
  .catch((e) => {
    console.log(e);
    console.log('error in mongodb');
  });
