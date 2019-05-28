const http = require('http');
const path = require('path');

http.createServer(function (request, response) {
   console.log('request url: ', request.url);
   
   var filePath = './public' + request.url;
   if (filePath == './public/') {
      filePath = './public/index.html';
   }

   var extName = path.extname(filePath);
}).listen(8080);
console.log('Server is running at http://localhost:8080');

// you need to make sure that the value of `extName` is a string and lowercase.
// Example below is how you casting `String` type to `Number`
// ```
// const magic = Number("42");
// console.log(typeof magic) // number
// ```
// use `String` global function and `.toLowerCase` method.