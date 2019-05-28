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
   var mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.png': 'image/png'
   };
   var contentType = mimeTypes[extName];
}).listen(8080);
console.log('Server is running at http://localhost:8080');

// next what happen if none of your extension name matches MIME types?
// you could set it to default value, in this case we use
// `applicaton/octet-stream`.
// modify `contentType` variable and add default value to it.
// hint: you could use short-circuit evaluation. In this case `OR` operator.