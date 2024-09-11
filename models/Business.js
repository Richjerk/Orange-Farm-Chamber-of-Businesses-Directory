const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  name: String,
  description: String,
  address: String,
  phone: String,
  image: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;