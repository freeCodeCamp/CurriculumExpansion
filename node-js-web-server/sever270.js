const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function (request, response) {
  console.log('request ', request.url);

  const filePath = './public' + request.url;
  if (filePath === './public/') {
    filePath = './public/index.html';
  }

  console.log(filePath)

  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.png': 'image/png'
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, function(error, content) {
    if (error) {
      fs.readFile('./public/404.html', function(error, content) {
        response.writeHead(404, { 'Content-Type': contentType });
        response.end(content, 'utf-8');
      }); 
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });

}).listen(8080);
console.log('Server running at http://localhost:8080');
