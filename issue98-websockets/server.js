// chat dependencies
const express             = require("express");
const app                 = express();
const path                = require("path");
const bodyparser          = require("body-parser");

// components
const ioServer            = require("./src/socket/socket")(app);
const router              = require("./src/routes/router");
const session             = require("./src/session/session");

const { PORT = 3000 } = process.env;

// middlewares
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public/views"));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html")

app.use(session);
app.use("/", router);

app.use((req, res, next) => {
  return res.status(404).render("404.html");
});

ioServer.listen(PORT, () =>
  console.log(`Server bound to http://localhost:${PORT}`)
);
