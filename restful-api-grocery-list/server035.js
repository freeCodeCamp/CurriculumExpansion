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

/*
Create a new API endpoint that responds to GET requests at the URL: `/:index`. 
*/