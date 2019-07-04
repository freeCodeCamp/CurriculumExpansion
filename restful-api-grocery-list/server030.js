const express = require('express');
const app = express();
const port = 3000;

let list = [];

app.get('/', (req, res) => {
  res.json(list);
});

/*
Now return the following as JSON: `"Added " + req.params.item`.
*/

app.post('/add/:item', (req, res) => {
  list.push(req.params.item);
});
