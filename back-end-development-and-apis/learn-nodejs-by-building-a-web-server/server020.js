const http = require('http');

http.createServer()

// Like many Node modules, `.createServer()` takes a callback function as an argument.
// For example, `fs.readFile()` takes a callback function as its second argument:
// ```
// const fs = require('fs');
// fs.readFile('file.txt', function() {
// });
// ```
// Pass a callback function as the first argument of `.createServer()`.