const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  movie_title: { type: String, required: true },
  review: { type: String, required: true },
  stars: { type: Number, required: true },
  date: { type: Date, required: true },
});

/*
Finally, export the method to create a "Review" model. Here is an example of an export function to create a "SomeModel" model:
```
module.exports = mongoose.model('SomeModel', SomeModelSchema );
```
*/