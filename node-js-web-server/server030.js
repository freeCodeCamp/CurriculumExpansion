const http = require('http');

http.createServer(function() {
   
})

// The callback function in `http.createServer()` takes two arguments.
// Pass `request` as the first argument and `response` as the second argument to the `http.createServer()` callback function.
// For example, the callback function in `fs.readFile()` also takes two arguments:
// ```
// const fs = require('fs');
// fs.readFile('file.txt', function(err, data) {
// });
// ```