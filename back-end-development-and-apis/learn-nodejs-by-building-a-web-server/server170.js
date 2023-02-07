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
  // `fs.readFile()` asynchronously reads the entire contents of a file and takes two arguments: the filename to be read and a callback function.
  // Pass `filePath` and an empty callback function as arguments to `readFile`.
  fs.readFile( );
}).listen(8080);
console.log('Server is running at http://localhost:8080');
