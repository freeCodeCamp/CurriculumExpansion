const http = require('http');
const path = require('path');

http.createServer(function(request, response) {
  console.log('request url: ', request.url);
  
  const filePath = './public' + request.url;
  if (filePath === './public/') {
    filePath = './public/index.html';
  }
  // But there's a problem -- if a user visits `http://localhost:8080/aBoUt`, our server will try to return the file `./public/aBoUt` and fail since there is no file with that name.
  // Chain the `.toLowerCase()` method to the String global function to prevent this from happening.
  const extName = String(path.extname(filePath));
}).listen(8080);
console.log('Server is running at http://localhost:8080');
