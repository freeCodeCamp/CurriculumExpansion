const express = require('express');
const app = express();
const port = 3000;

let list = [];

app.get('/', (req, res) => {
  res.json(list);
});

/*
This endpoint will be used to add items in the list. Update the url from `/` to `/add/:item`.
*/

app.post('/', (req, res) => {

});
