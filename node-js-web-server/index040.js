const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
   console.log(req.url, req.method);
   fs.readFile(__dirname + '/public/index.html', function (err, data) {
      if (err) throw err;
      res.write(data);
      res.end();
   });
});

// http.createServer will return http.Server instance, which have server.listen() method.
// this method will starts the http server listening for connections.
// you can chain http.createServer().listen(port) to starts your server
// at some define port number.
// Chain the listen method and give the port number to 8080.