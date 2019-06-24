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
      fs.readFile('./public/404.html', function(error, content) {
        response.writeHead(404, { 'Content-Type': contentType });
        // Then you need to tell the server that the `response` has ended.
        // Just after the `.writeHead()` method, call the `.end()` method from `response`.

      }); 
    } else {
        
    }
  });
}).listen(8080);
console.log('Server is running at http://localhost:8080');
