const http = require('http');
const path = require('path');

http.createServer(function(request, response) {
  console.log('request url: ', request.url);
  
  const filePath = './public' + request.url;
  if (filePath === './public/') {
    filePath = './public/index.html';
  }
  // Use the String global function to make sure that the value of `extName` is a string.
  // Here's an example:
  // ```
  // const magic = String(42);
  // console.log(magic, typeof magic) // '42', 'string'.
  // ```
  const extName = path.extname(filePath);
}).listen(8080);
console.log('Server is running at http://localhost:8080');
