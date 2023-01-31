const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  movie_title: { type: String, required: true },
  review: { type: String, required: true },
  stars: { type: Number, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('SomeModel', SomeModelSchema );

/*
Great! Now it's time to use this model in the server.
[DEVELOPER'S NOTE: Next task is in the file "server080.js"]
*/