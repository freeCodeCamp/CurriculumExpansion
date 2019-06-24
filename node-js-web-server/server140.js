const http = require('http');
const path = require('path');

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
  // But what happens if `extName` doesn't match any of the keys in `mimeTypes`?
  // In cases like this, it's best to use the default MIME type 'application/octet-stream'.
  // Modify `contentType` so that it equals either `mimeTypes[extName]`, OR (`||`) 'application/octet-stream'.
  const contentType = mimeTypes[extName];
}).listen(8080);
console.log('Server is running at http://localhost:8080');
