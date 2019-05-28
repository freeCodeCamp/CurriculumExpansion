const http = require('http');
const path = require('path');

http.createServer(function (request, response) {
   console.log('request url: ', request.url);
   
   var filePath = './public' + request.url;
   if (filePath == './public/') {
      filePath = './public/index.html';
   }
}).listen(8080);
console.log('Server is running at http://localhost:8080');

// we can get the extension name from filePath variable with
// `path.extname()` method.
// extract the extension name from `filePath` variable
// and store it in variable with name `extName`.