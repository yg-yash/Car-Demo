const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: String,
  price: String,
  model: String,
  year: String,
  image: String,
  fueltype: String,
  transmissionType: String,
  bodyType: String,
  interior: String,
  seating: String,
  fueltank: String,
});

const users = mongoose.model('cars', UserSchema);

module.exports = users;
