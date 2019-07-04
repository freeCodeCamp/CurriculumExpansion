const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  movie_title: { type: String, required: true },
  review: { type: String, required: true },
  stars: { type: Number, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Review', ReviewSchema);