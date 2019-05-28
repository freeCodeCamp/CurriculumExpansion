const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer(function (request, response) {
   console.log('request url: ', request.url);

   var filePath = './public' + request.url;
   if (filePath == './public/') {
      filePath = './public/index.html';
   }
   console.log(filePath)

   var extName = String(path.extname(filePath)).toLowerCase();
   var mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.png': 'image/png'
   };
   var contentType = mimeTypes[extName] || 'application/octet-stream';

   fs.readFile(filePath, function(error, content) {
      if (error) {
      
      } else {
         
      }
   });
}).listen(8080);
console.log('Server is running at http://localhost:8080');

// what happen if there is an error?
// for this case, we just assume that the error is 404.
// so if there is an error, serve the `404.html` page, but first
// you need to 'read' it with `readFile` method.
// write another `readFile` method and give the first arguments
// path to `404.html` page.

// note: 404 HTTP response code is Not Found client error response.
// more about HTTP response status code [here]('https://developer.mozilla.org/en-US/docs/Web/HTTP/Status');
// 