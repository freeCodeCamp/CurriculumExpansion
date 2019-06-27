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

app.get('/:index', (req, res) => {
  res.json(list[req.params.index]);
});

app.delete('/:index', (req, res) => {
  const item = list.splice(req.params.index, 1);
  res.json("Deleted " + item);
});

/*
Create the final API endpoint that responds to POST requests at the URL: `/:index/:item`. This will be used to update a specific array index to a new item.
*/

app.post('/:index/:item', (req, res) => {
  
});