const http = require('http');

http.createServer(function(request, response) {
  console.log('request url: ', request.url);
  // Our project has this file structure:
  // ```
  // ++public
  //    --index.html
  //    --products.html
  //    --about.html
  //    --404.html
  //    --forrest1.png
  //    --forrest2.png
  //    --forrest3.png
  //    --style.css
  // --server.js
  // --package.json
  // --README.md
  // ```
  // When users visit a certain URL, our server should respond with the correct page -- `http://localhost:8080/products` should get the response `./public/products.html`.
  // Create a variable called `filePath` and set it equal to `'./public' + request.url`.

}).listen(8080);
console.log('Server is running at http://localhost:8080');
