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

   fs.readFile();
}).listen(8080);
console.log('Server is running at http://localhost:8080');

// `readFile` method asynchronously read the entire contents of a file.
// you can passed two arguments to this method: filename
// and a callback function.
// write the two arguments into `readFile` method.
// give the `filePath` value to first arguments and empty callback function.