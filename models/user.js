const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  email: String,
  password: String,
});

const users = mongoose.model('user', UserSchema);

module.exports = users;
