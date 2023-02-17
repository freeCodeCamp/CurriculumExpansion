const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

app.use(express.json());

const uri = process.env.DB_URI;

mongoose.connect(uri, { useNewUrlParser: true});
const db = mongoose.connection;

db.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

/* 
Start the server listening for connections with `app.listen()`. Pass in the port and a callback function to notify that the server is listening. The parameters should be ``port, () => console.log(`Review server listening on port ${port}!`)``
*/