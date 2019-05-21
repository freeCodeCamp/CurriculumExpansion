const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

/* 
You are just about to create the API endpoints. But first, require the database model. Create a `const` called "Review" and set it to `require('./models/review')`. Next, you will build the model file. [DEVELOPER'S NOTE: Next task is is in the file "review000.js"]
*/

app.use(express.json());

const uri = process.env.DB_URI;

mongoose.connect(uri, { useNewUrlParser: true});
const db = mongoose.connection;

db.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(port, () => console.log(`Review server listening on port ${port}!`));

