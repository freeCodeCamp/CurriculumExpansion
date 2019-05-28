const http = require('http');

http.createServer(function (request, response) {
   console.log('request url: ', request.url);
   
   var filePath = './public' + request.url;
   if (filePath == './public/') {
      filePath = './public/index.html';
   }
}).listen(8080);
console.log('Server is running at http://localhost:8080');

// for this lesson require `path` module in your code
// as we need it to extract the extension file name later.
// assign the module to `path` variable.