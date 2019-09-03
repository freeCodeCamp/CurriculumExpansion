const express = require("express");
const app = express();
const helmet = require("helmet");
// https://helmetjs.github.io/ - for more information on all packages and uses.

app.use(helmet.dnsPrefetchControl());
app.use(helmet.hidePoweredBy());
// Hide Powered-By
// Removes the 'X-Powered-By' header from requests.

// Now we want a few more security features enabled.
// Enable the `ieNoOpen`, `noSniff`, `xssFilter`, and `frameguard` features.
