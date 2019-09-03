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

app.post("/contact", (req, res, next) => {
  console.log(`message: ${req.body.message}`);
});
// receives contact form message

// One final thing our server needs is to listen on a local port for requests.
// Setup our server to listen at port 8080 and console.log the message 'App is listening on port 8080'
