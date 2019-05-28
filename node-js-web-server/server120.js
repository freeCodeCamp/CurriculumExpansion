const http = require('http');
const path = require('path');

http.createServer(function (request, response) {
   console.log('request url: ', request.url);
   
   var filePath = './public' + request.url;
   if (filePath == './public/') {
      filePath = './public/index.html';
   }
   console.log(filePath)

   var extName = String(path.extname(filePath)).toLowerCase();
}).listen(8080);
console.log('Server is running at http://localhost:8080');

// next assign this object into a variable name `mimeTypes`.
// ```
// {
   // '.html': 'text/html',
   // '.js': 'text/javascript',
   // '.css': 'text/css',
   // '.png': 'image/png'
// }
// ```
// MIME type or Multipurpose Internet Mail Extensions is a standard
// that indicates the nature and format of a document, file, or
// assortment of bytes.
// you could read more about MIME type [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)