// chat dependencies
const express             = require("express");
const app                 = express();
const path                = require("path");
const express_session     = require("express-session");
const bodyparser          = require("body-parser");

// components
const server              = require("./socket/socket")(app);
const router              = require("./routes/router");

// config
const {
  PORT = 3000,
  SESS_SECRET = "freecodecamp",
  SESS_NAME = "sid"
} = process.env;

// const session = express_session({
//   secret: SESS_SECRET,
//   name: SESS_NAME,
//   resave: false,
//   saveUninitialized: false
// });

// middlewares
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));

// router
// app.use(session);
app.use("/", router());

app.use((req, res, next) => {
  return res.status(404).sendFile(__dirname + "/views/404.html");
});

server.listen(PORT, () =>
  console.log(`Server bound to http://localhost:${PORT}`)
);
