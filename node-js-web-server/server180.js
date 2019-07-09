const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer(function(request, response) {
  console.log('request url: ', request.url);

  const filePath = './public' + request.url;
  if (filePath === './public/') {
    filePath = './public/index.html';
  }
  console.log(filePath)

  const extName = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.png': 'image/png'
  };
  const contentType = mimeTypes[extName] || 'application/octet-stream';

  // The callback function in `fs.readFile()` also takes two arguments.
  // The first is the error object, and the second is the content of the file being read.
  // Pass two arguments to the anonymous callback function in `readFile`, and give them the names `error` and `content`.
  fs.readFile(filePath, function() {

  });
}).listen(8080);
console.log('Server is running at http://localhost:8080');
