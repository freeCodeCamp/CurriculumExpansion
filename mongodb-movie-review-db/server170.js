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
After saving the review, THEN send the message "Review added!" as a JSON response. Here is an example:
```
Exercise.save()
  .then(() => res.json('Exercise added!'))
```
*/

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
});

app.listen(port, () => console.log(`Review server listening on port ${port}!`));

