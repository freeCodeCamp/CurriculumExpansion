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
DEVELOPER'S NOTE: The review file (modules/review.js) should be created before this task]
Route HTTP GET requests to "/" by adding the following code with an empty callback function:
```
app.get('/', (req, res) => {
});
```
*/

app.listen(port, () => console.log(`Review server listening on port ${port}!`));

