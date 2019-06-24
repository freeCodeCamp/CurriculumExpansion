const http = require('http');

http.createServer(function(request, response) {
   
}).listen(8080);
console.log('Server is running at http://localhost:8080');

// Inside the `http.createServer()` callback function, write `console.log('request url: ', request.url);` to log incoming requests to the console.