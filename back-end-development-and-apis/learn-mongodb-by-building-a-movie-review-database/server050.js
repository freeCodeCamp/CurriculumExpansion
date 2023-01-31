const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

app.use(express.json());

const uri = process.env.DB_URI;

mongoose.connect(uri, { useNewUrlParser: true});
const db = mongoose.connection;

/* 
Once the database connection opens, log "MongoDB database connection established successfully" to the console. Here is how to run code once the database connection opens:
```
db.once('open', () => {
  // Code here is run once the database connection opens.
})
```
*/