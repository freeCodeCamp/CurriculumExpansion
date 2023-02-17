const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const Review = require('./models/review');

app.use(express.json());

const uri = process.env.DB_URI;

mongoose.connect(uri, { useNewUrlParser: true});
const db = mongoose.connection;

db.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.get('/', (req, res) => {
  Review.find()
    .then(reviews => res.json(reviews))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* 
Make sure the `stars` variable and `date` variables are the correct data type using the `Number()` and `Date()` functions. For instance, `const stars` should equal `Number(req.body.stars)`
*/

app.post('add', (req, res) => {
  const movie_title = req.body.movie_title;
  const review = req.body.review;
  const stars = req.body.stars;
  const date = req.body.date;
});

app.listen(port, () => console.log(`Review server listening on port ${port}!`));

