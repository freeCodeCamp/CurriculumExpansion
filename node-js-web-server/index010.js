const http = require('http');

// In order to create your first server, we need a http package.
// require it in your index.js
// Node http package have a standard method to build a server.
// The method is called createServer. createServer takes an options
// which is an Object and a requestListener, which is a function and returns
// a http.Server instance
// The syntax looks like this:
// http.createServer(function(request, response) {
//   // do some logic here
// });
// Now create your createServer and console.log the request url and method
// using request.url and request.method.