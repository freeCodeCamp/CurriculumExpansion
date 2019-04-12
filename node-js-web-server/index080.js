const http = require('http');
const fs = require('fs');
const { parse } = require('querystring');

http.createServer(function (req, res) {
   console.log(req.url, req.method);
   switch (req.url) {
      case '/':
         fs.readFile(__dirname + '/public/index.html', function (err, data) {
            if (err) throw err;
            res.write(data);
            res.end();
         });
         break;
      case '/products':
         fs.readFile(__dirname + '/public/products.html', function (err, data) {
            if (err) throw err;
            res.write(data);
            res.end();
         });
         break;
      case '/about':
         fs.readFile(__dirname + '/public/about.html', function (err, data) {
            if (err) throw err;
            res.write(data);
            res.end();
         });
         break;
      default:
         res.statusCode = 404;
         res.statusMessage = 'Not Found';
         res.write(res.statusMessage);
         res.end();
         break;
   }
}).listen(8080);

// Now we can handle and parse the form data from user like so:
// if (req.method === 'POST') {
//    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//    }
// }
// Reading the `content-type` keys in headers is to make sure that
// the data is coming from a form element.