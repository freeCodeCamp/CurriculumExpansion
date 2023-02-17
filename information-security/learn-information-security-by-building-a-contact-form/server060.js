const express = require("express");
const app = express();
const helmet = require("helmet");
// https://helmetjs.github.io/ - for more information on all packages and uses.

app.use(helmet.dnsPrefetchControl());
app.use(helmet.hidePoweredBy());

app.use(helmet.ieNoOpen());
// Sets the'X-Download-Options' to prevent IE from downloading.

app.use(helmet.noSniff());
// Helps prevent browsers guessing the MIME type.
// Sets 'X-Content-Type-Options' header to 'nosniff'.

app.use(helmet.xssFilter());
// Sets the 'X-XSS-Proection' header to prevent reflected XSS attacks.

app.use(helmet.frameguard());
// Frameguard
// Control who can insert iframes into page.
// Sets "X-Frame-Options: SAMEORIGIN" by default.

// You can also configure the settings when enabling features.
// Enable `hsts` but pass an object into the function `{ maxAge: 5184000}`
