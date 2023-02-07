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
Inside the callback function, create four variables with `const` with the names movie_title, review, stars, and date. Don't assign any values yet.
*/

app.post('add', (req, res) => {
});

app.listen(port, () => console.log(`Review server listening on port ${port}!`))

