const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
   console.log(req.url, req.method);

});

// Next to read the file you could use readFile method or createReadStream method from fs module.
// you can use readFile method since the file is not big in size.
// if you have file with big size, use createReadStream instead.
// createFile will take a path, an options and a callback.
// This code will search a file in root directory /static/hello.html:
// fs.readFile(__dirname + '/static/hello.html', function(err, data) {
//   if (err) throw err; // handling error
//   res.write(data); // write the response back to user
//   res.end(); // tell the server the response is complete
// });
// write the readFile method and serve the index.html file in public directory.
