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
Delete the item from the array with the index from the URL. Assign the deleted item to a `const` named "item". You can do that all with one line with: `const item = list.splice(req.params.index, 1);`.
*/

app.delete('/:index', (req, res) => {

});