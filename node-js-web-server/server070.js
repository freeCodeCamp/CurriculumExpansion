const http = require('http');

http.createServer(function (request, response) {
   console.log('request url: ', request.url);
}).listen(8080);
console.log('Server is running at http://localhost:8080');

// so we have this files structure:
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
// what we want to do is when user hit some url, our server
// will respond with a correct page, like:
// url: `/`, file to response `./public/index.html`
// url: `/products`, file to response `./public/products.html`
// and so on...
// so you need the path to the file and store it in a variable.
// write `filePath` variable and assign public folder path and 
// concatenate it with `request.url` value.