const http = require('http');

http.createServer(function(request, response) {
  console.log('request url: ', request.url);
  
  const filePath = './public' + request.url;
  if (filePath === './public/') {
    // If `filePath` is `./public/`, set `filePath` equal to `'./public/index.html'`.

  }
}).listen(8080);
console.log('Server is running at http://localhost:8080');
