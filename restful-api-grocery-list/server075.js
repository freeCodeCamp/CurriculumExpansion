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

app.post('/:index/:item', (req, res) => {
  list[req.params.index] = req.params.item;
  res.json("Updated " + req.params.item);
});

app.listen(port, () => console.log("List server listening on port " + port));

/*
You are finished! Time to test out the shopping list app by sending HTTP requests to the different endpoints.
*/