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
  // To read local files, use the File System `.readFile()` method.
  // Here's an example using another `fs` method: `fs.writeFile()`.

}).listen(8080);
console.log('Server is running at http://localhost:8080');
