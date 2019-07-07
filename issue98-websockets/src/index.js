// chat dependencies
const express             = require("express");
const app                 = express();
const path                = require("path");
const bodyparser          = require("body-parser");

// components
const ioServer            = require("./socket/socket")(app);
const router              = require("./routes/router");
const session             = require("./session/session")
// const auth                = require("./auth/auth")

const { PORT = 3000 } = process.env;

// middlewares
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));

app.use(session);
app.use("/", router);

app.use((req, res, next) => {
  return res.status(404).sendFile(__dirname + "/views/404.html");
});

ioServer.listen(PORT, () =>
  console.log(`Server bound to http://localhost:${PORT}`)
);
