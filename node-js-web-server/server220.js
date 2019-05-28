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
            
        }); 
      } else {
         
      }
   });
}).listen(8080);
console.log('Server is running at http://localhost:8080');

// now it is time for you to do something with the `response` object.
// to show the user if there is any 404 error, you could use
// `.writeHead` method.
// add that method to your code.