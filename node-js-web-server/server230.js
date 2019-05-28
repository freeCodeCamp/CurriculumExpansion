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
            response.writeHead();
        }); 
      } else {
         
      }
   });
}).listen(8080);
console.log('Server is running at http://localhost:8080');

// `writeHead` method can be passed two arguments:
// the `statusCode` of the response and the `headers` object
// add the `statusCode` and headers object with the below data:
// status code: 404
// headers object: {'Content-Type': // file content-type}
// you can get the value of the content type from `contentType` variable