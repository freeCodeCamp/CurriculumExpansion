const http = require('http');

http.createServer(function (request, response) {
   
})

// now you can start a server and listening for connections with
// `.listen()` method and pass a port number.
// you can do method chaining (chain functions) like the example below:
// ```
// const sumBiggerThanFive = 
// [3, 15, 1, 21, 6].filter(arr => arr > 5).reduce((a, b) => a + b, 0);
// console.log(sumBiggerThanFive) // 42
// ```
// the method chaining above can be done because `.filter` return an array
// which can be executed by `.reduce` method.
// do method chaining for `.listen()` method and passed `8080` as port number.