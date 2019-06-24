const http = require('http');
const path = require('path');

http.createServer(function(request, response) {
  console.log('request url: ', request.url);
  
  const filePath = './public' + request.url;
  if (filePath === './public/') {
    filePath = './public/index.html';
  }
  // We can get the extension name from the `filePath` variable with the `path.extname()` method.
  // Extract the extension name from `filePath` and store it in a variable named `extName`.
  
}).listen(8080);
console.log('Server is running at http://localhost:8080');
