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
After the reviews are returned from the MongoDB database, THEN send the reviews as a JSON response. Here is an example:
```
Exercise.find()
  .then(exercises => res.json(exercises))
```
*/

app.get('/', (req, res) => {
  Review.find()
});

app.listen(port, () => console.log(`Review server listening on port ${port}!`));

