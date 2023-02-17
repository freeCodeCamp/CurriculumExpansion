const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
});

/*
Add the following keys to the schema: movie_title, review, stars, date. The first two should be strings. "stars" should be a number and "date" should be a date. All should be required.
Here is an example:
```
const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
});
```
*/