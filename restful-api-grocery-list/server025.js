const express = require('express');
const app = express();
const port = 3000;

let list = [];

app.get('/', (req, res) => {
  res.json(list);
});

/*
The `:item` part of the URL is like a variable that can be accessed with `req.params.item`. Inside the POST request, push the `:item` from the URL onto the list array.
*/

app.post('/add/:item', (req, res) => {

});
