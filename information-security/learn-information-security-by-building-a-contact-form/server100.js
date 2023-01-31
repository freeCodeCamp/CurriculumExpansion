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

// With this Content Security Policy only allows content from the defined domains.
// If you wanted to include Bootstrap for example. You would add `'maxcdn.bootstrapcdn.com'` to the src.

// Now we have helmet all set up and our site is much more secure.

// Our server is going to be receiving a post request from a form on the front-end.
// Configure the server to use `express.urlencoded` and `express.json`
