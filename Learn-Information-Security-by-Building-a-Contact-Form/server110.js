const express = require("express");
const app = express();
const helmet = require("helmet");
// https://helmetjs.github.io/ - for more information on all packages and uses.

const helmetConfig = {
  noCache: false,
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"]
    }
  }
};

app.use(helmet(helmetConfig));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// access req.body
// Now our application can receive the body of the post request.

// Next setup the server to serve the an `index.html` file for requests at `/`
