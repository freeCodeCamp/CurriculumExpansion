const http = require('http');
const path = require('path');

http.createServer(function(request, response) {
  console.log('request url: ', request.url);
  
  const filePath = './public' + request.url;
  if (filePath === './public/') {
    filePath = './public/index.html';
  }
  console.log(filePath)

  const extName = String(path.extname(filePath)).toLowerCase();
  // Next, assign this object to a variable named `mimeTypes`:
  // ```
  // {
    // '.html': 'text/html',
    // '.js': 'text/javascript',
    // '.css': 'text/css',
    // '.png': 'image/png'
  // }
  // ```
  // MIME type, or Multipurpose Internet Mail Extensions, is a standard that indicates what type of content is being transmitted.
  // Some other examples of MIME type include `image/jpeg`, `audio/mp3`, and `video/mp4`.
  
}).listen(8080);
console.log('Server is running at http://localhost:8080');
