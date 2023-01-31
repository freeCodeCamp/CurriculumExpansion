const http = require('http');

http.createServer(function(request, response) {
  console.log('request url: ', request.url);
  
  const filePath = './public' + request.url;
  // Now when someone visits `http://localhost:8080/about`, filePath will be `./public/about`.
  // But what about the home page, `http://localhos:8080/`?
  // There's no file named `/`, so we will need to account for that.
  // Write an `if` statement to check if `filePath` is equal to `./public/`.
  // Leave the block of the `if` statement empty for now.
  
}).listen(8080);
console.log('Server is running at http://localhost:8080');
