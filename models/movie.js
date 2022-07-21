const mongoose = require('mongoose');
const movie = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  year: {
    type: Number,
    required: true,
  },
  imdbRating: {
    type: Number,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model('movie',movie)