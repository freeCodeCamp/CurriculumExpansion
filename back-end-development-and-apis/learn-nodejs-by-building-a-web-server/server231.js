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
        // The next argument `.writeHead()` takes is a headers object.
        // HTTP headers are basic data about an HTTP request or response, and contain information about the date, your browser, and the MIME type of the content.
        // Pass {'Content-Type': // file content-type } as the second argument to `.writeHead()`.
        // Remember that you can get the content type for the second argument from the `contentType` variable.
        response.writeHead(404, );
      }); 
    } else {
        
    }
  });
}).listen(8080);
console.log('Server is running at http://localhost:8080');
