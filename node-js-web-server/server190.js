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

  fs.readFile(filePath, function(error, content) {
    // Write an `if...else` statement.
    // The `if` statement should handle the `error` object.
    // Just leave the else statement blank for now.
    
  });
}).listen(8080);
console.log('Server is running at http://localhost:8080');
