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
Inside this callback function, use the mongoose `find()` helper function to to return all review in the database. Here is how you would return all exercises in a database: `Exercise.find();`.
*/

app.get('/', (req, res) => {
});

app.listen(port, () => console.log(`Review server listening on port ${port}!`));

