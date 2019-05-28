const http = require('http');

http.createServer(function (request, response) {
   
}).listen(8080);
console.log('Server is running at http://localhost:8080');

// now it time to check for request object.
// to check the url from incoming request, you can check `request.url`
// try to log it with `console.log` inside callback function.