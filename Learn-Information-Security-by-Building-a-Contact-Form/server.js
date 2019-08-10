const express = require("express");
const app = express();
// require helmet package
const helmet = require("helmet");

// setup security with helmet
// first enable one at a time

// DNS Prefetch Control
// disables browser from DNS prefetching by disabling 'X-DNS-Prefetch-Control' header
// Sets "X-DNS-Prefetch-Control: off".
app.use(helmet.dnsPrefetchControl());

// Hide Powered-By
// Removed the 'X-Powered-By' header from requests.
app.use(helmet.hidePoweredBy());

// HSTS
// will only visit website over https - not http
// Sets "Strict-Transport-Security: max-age=5184000; includeSubDomains".
const sixtyDaysInSeconds = 5184000;
app.use(
  helmet.hsts({
    maxAge: sixtyDaysInSeconds
  })
);

// sets the'X-Download-Options' to prevent IE from downloading
app.use(helmet.ieNoOpen());

// helps prevent browsers guessing the MIME type
// sets 'X-Content-Type-Options' header to 'nosniff'
app.use(helmet.noSniff());

// sets the 'X-XSS-Proection' header to prevent reflected XSS attacks
app.use(helmet.xssFilter());

// Frameguard
// Control who can insert iframes into page.
// Sets "X-Frame-Options: SAMEORIGIN".
// app.use(helmet.frameguard({ action: 'sameorigin' }))

// for use in codesandbox need to set 'allow-from'
app.use(
  helmet.frameguard({
    action: "allow-from",
    domain: "https://lmvm9.sse.codesandbox.io/"
  })
);

// all of these are actually enabled by default by helmet. to enable simply use
app.use(helmet());
// if you need to add extra packages or adjust the settings it takes a configuration object
const configObject = {};
app.use(helmet(configObject));

// use default setup with noCache & contentSecurityPolicy added
// frameguard configured to allow iframe from sandbox address

app.use(
  helmet({
    frameguard: {
      action: "allow-from",
      domain: "https://lmvm9.sse.codesandbox.io/"
    },
    noCache: true,
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'"]
      }
    }
  })
);

// access req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// serve html file at home route
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

// receive contact form message - POST '/contact'
app.post("/contact", (req, res, next) => {
  console.log(`message: ${req.body.message}`);
  res.sendFile(__dirname + "/message.html");
});

app.listen(8080, () => console.log(`App listening on port 8080`));
