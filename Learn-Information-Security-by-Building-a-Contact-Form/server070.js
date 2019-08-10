const express = require("express");
const app = express();
const helmet = require("helmet");
// https://helmetjs.github.io/ - for more information on all packages and uses.

app.use(helmet.dnsPrefetchControl());
app.use(helmet.hidePoweredBy());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(helmet.frameguard());
app.use(
  helmet.hsts({
    maxAge: 5184000 /* 60 days in seconds */
  })
);

// The features we have enabled so far are included in the basic package and can be included with one line.
// `app.use(helmet())`
// Remove the helmet features enabled so far and use this shorter form.
