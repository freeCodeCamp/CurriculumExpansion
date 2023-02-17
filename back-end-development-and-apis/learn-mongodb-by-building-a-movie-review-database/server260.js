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

app.post('add', (req, res) => {
  const movie_title = req.body.movie_title;
  const review = req.body.review;
  const stars = Number(req.body.stars);
  const date = Date.parse(req.body.date);

  const newReview = new Review({
    movie_title,
    review,
    stars,
    date,
  });

  newReview.save()
    .then(() => res.json('Review added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.get('/:id', (req, res) => {
  Review.findById(req.params.id)
    .then(review => res.json(review))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.delete('/:id', (req, res) => {
  Review.findByIdAndDelete(req.params.id)
    .then(() => res.json('Review deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.post('/update/:id', (req, res) => {
  Review.findById(req.params.id)
    .then(review => {
      review.movie_title = req.body.movie_title;
      review.review = req.body.review;
      review.stars = Number(req.body.stars);
      review.date = Date.parse(req.body.date)

      review.save()
        .then(() => res.json('Review updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(port, () => console.log(`Review server listening on port ${port}!`));

/* 
You are done! Now you can test it out. [DEVELOPER'S NOTE: Instructions on testing should be added once that feature is implemented.]
*/