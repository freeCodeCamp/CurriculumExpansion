const http = require('http');
const path = require('path');

http.createServer(function (request, response) {
   console.log('request url: ', request.url);

   var filePath = './public' + request.url;
   if (filePath == './public/') {
      filePath = './public/index.html';
   }
   console.log(filePath)

   var extName = String(path.extname(filePath)).toLowerCase();
   var mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.png': 'image/png'
   };
}).listen(8080);
console.log('Server is running at http://localhost:8080');

// Next we look at the extension file store in `extName` variable
// if it matches any of our `mimeTypes`. 
// write a varibale call `contentType` and assign the `mimeTypes` value
// note: you could check the value by using [] like so:
// ```
// const colour = 'color';
// const fcc = {
//    'address': 'https://freecodecamp.org',
//    'opensource': true,
//    'color': '#006400'
// }
// const fccColor = fcc[colour];
// console.log(fccColor); // '#006400'
// ```