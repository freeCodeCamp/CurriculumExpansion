const http = require('http');

// We will need the `path` module to read the extensions of our files later.
// Just under your `http` variable, `require` the `path` module and assign it to a variable named `path`.

http.createServer(function(request, response) {
  console.log('request url: ', request.url);
  
  const filePath = './public' + request.url;
  if (filePath === './public/') {
    filePath = './public/index.html';
  }
}).listen(8080);
console.log('Server is running at http://localhost:8080');
