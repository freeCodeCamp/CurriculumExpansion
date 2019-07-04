const http = require('http');
const path = require('path');
// Now we need a way to read the files saved in the `/public` directory.
// Require the `fs` or File System module and assign it to the variable `fs`.

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
}).listen(8080);
console.log('Server is running at http://localhost:8080');
