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
   if (req.method === 'POST') {
         if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
            let body = '';
            req.on('data', function (chunk) {
               body += chunk;
               console.log(body);
            });
         }
      }
}).listen(8080);

// Now we have URL like string of data, if you console.log the body,
// it would looks like:
// `userName=John+Doe&userEmail=johndoe%40xyz.com&userComment=Hi%2C+your+site+is+amazing&submitButton=Submit`
// So you need  to parse it using parse method that we already import from 
// querystring package and log the result.
// You can do this inside `end` event emitter to tell the server that the 
// response is complete.