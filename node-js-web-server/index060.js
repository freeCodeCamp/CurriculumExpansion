const http = require('http');
const fs = require('fs');

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
         break;
   }
}).listen(8080);

// Looks great, now we can switch between pages by clicking on the link
// in our navigation bar. 
// If you check the url, it will change too as you move between pages.
// But sometimes when we visit a website we encountered a 404 page, which
// happening when the page we are looking for is not there.
// How to handle it? We could use .statusCode and tell the
// user that the page they looking for is not there.
// response.statusCode = 404;
// response.statusMessage = 'Not Found'
// and then we cand send the statusMessage to user.