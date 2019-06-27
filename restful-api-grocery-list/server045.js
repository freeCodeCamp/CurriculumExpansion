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

/*
Create a new API endpoint that responds to DELETE requests at the URL: `/:index`. 
*/