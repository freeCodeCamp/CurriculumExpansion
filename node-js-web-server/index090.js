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
            // handle data
         }
      }
}).listen(8080);

// How to handle the data inside it? You need to use Event emitter.
// Event emitter syntax is like this: `emitter.on(eventName, listener)`
// where eventName is the name of the event and listener is the callback function.
// You could use Event emitter on the request object like so:
// req.on('data', function (chunk) {
//    do something with data
// });
