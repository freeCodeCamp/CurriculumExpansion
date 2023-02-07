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
    if (error) {
      // If there is an error, we can assume that it's a 404 or 'Not Found' error.
      // This can happen if the user tries to request a page that doesn't exist like `/freecodecamp.html`, or if the URL has a spelling error.
      // There's already a `404.html` page, but first you need to read it with `fs.readFile()`.
      // Write another `fs.readFile()` method in the `if` block, and give it the path `./public/404.html` as its first argument.

    } else {
        
    }
  });
}).listen(8080);
console.log('Server is running at http://localhost:8080');
