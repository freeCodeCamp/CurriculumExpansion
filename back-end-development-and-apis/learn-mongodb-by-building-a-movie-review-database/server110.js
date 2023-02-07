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

/* 
If there is an error during the `find()` function, return an error message by adding the following on the next line: `.catch(err => res.status(400).json('Error: ' + err));`
*/

app.get('/', (req, res) => {
  Review.find()
    .then(reviews => res.json(reviews))
});

app.listen(port, () => console.log(`Review server listening on port ${port}!`));

