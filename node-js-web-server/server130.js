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
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.png': 'image/png'
  };
  // Next, we need to see if the file extension stored in the `extName` variable matches any of our `mimeTypes`.
  // For example, if a user visits `http://localhost:8080/about.html`, then `extName` would be `.html` and we could use that to save `text/html` to another variable.
  // Remember that you can get the value from an object by using bracket (`[]`) notation like so:
  // ```
  // const key = 'color';
  // const fcc = {
  //    'address': 'https://freecodecamp.org',
  //    'color': '#006400'
  // }
  // const fccColor = fcc[key]; // '#006400'
  // ```
  // Create a variable called `contentType` and assign it a value from `mimeTypes`.

}).listen(8080);
console.log('Server is running at http://localhost:8080');
