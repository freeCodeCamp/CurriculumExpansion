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

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
// serves html file at `/` route

// Now setup a post route at `/contact` which will listen for a message and `console.log` the message
// The message will included in the body of the request as 'message'
