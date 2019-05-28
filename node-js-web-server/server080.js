const http = require('http');

http.createServer(function (request, response) {
   console.log('request url: ', request.url);
   
   var filePath = './public' + request.url;
}).listen(8080);
console.log('Server is running at http://localhost:8080');

// now everytime user hit an url you could see the file path.
// if you `console.log` the filePath file, you will get something like:
// `./public/`
// you can now write an if statement if user hit `/` path
// reassigned the `filePath` variable to  `./public/index.html`