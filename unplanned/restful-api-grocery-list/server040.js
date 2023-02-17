const express = require('express');
const app = express();
const port = 3000;

let list = [];

app.get('/', (req, res) => {
  res.json(list);
});

app.post('/add/:item', (req, res) => {
  list.push(req.params.item);
  res.json("Added " + req.params.item);
});

// Return a JSON response that contains the item located at the array index from the URL.

app.get('/:index', (req, res) => {
  res.json(list[req.params.index]);
});