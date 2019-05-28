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
}).listen(8080);
console.log('Server is running at http://localhost:8080');

// to read the file you need `.readFile` method from File System API
// that we already required.
// write the `readFile` module first.