const express = require('express');
const app = express();
const port = 3000;

let list = [];

app.get('/', (req, res) => {
  res.json(list);
});

/*
Now create a new API endpoint similar to the one you just created. While the previous one responds to GET requests, the new one should respond to POST requests. Don't send back a response yet.
*/