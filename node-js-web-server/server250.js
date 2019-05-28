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
         fs.readFile('./public/404.html', function(error, content) {
            response.writeHead(404, { 'Content-Type': contentType });
            response.end();
        }); 
      } else {
         
      }
   });
}).listen(8080);
console.log('Server is running at http://localhost:8080');

// this `response.end()` method MUST be called after each response.
// you could passed three arguments to `end` method: data, encoding and
// callback function.
// for this challenge, write the data you want to send to user
// which you can get from the `content` arguments and set the encoding to 'utf-8'.