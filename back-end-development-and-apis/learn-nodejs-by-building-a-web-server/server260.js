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
        response.end(content, 'utf-8');
      }); 
    } else {
      // Let's write the `else` block to finish the server.
      // Use the `.writeHead()` method just like you did in the `if` block.
      // However, since this response indicates a successful request to the server, pass the number `200` as the first argument of `.writeHead()`.
      // The second argument is the same headers object as before, `{ 'Content-Type': contentType }`.
      
    }
  });
}).listen(8080);
console.log('Server is running at http://localhost:8080');
