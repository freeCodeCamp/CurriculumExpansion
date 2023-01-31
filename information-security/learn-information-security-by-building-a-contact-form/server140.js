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

app.listen(8080, () => console.log(`App listening on port 8080`));
// App is listening for requests on port 8080
