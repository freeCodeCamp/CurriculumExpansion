const express = require('express');
const app = express();
const port = 3000;

let list = [];

app.get('/', (req, res) => {
  
});

/*
In the code you just added, `req` contains information about the HTTP request. `res` is used to send back the desired HTTP response. Use `res` to send back a JSON response that contains the array `list`. For example, here is how you would send a JSON response of an array called "array": `res.json(array);`
```
*/