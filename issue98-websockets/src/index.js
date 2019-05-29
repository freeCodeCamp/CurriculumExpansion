// dependencies
const express = require("express");
const app = express();
const express_session = require("express-session");

// config
const {
  PORT = 3000,
  SESS_SECRET = "freecodecamp",
  SESS_NAME = "sid"
} = process.env;

const session = express_session({
  secret: SESS_SECRET,
  name: SESS_NAME,
  resave: false,
  saveUninitialized: false
});

// configs
app.use(session);
app.set("views", __dirname + "views");

// components
const router = require("./routes/router")();
const server = require("./socket/socket")(app, session);

// middlewares
app.use(express.static("public"));
app.use("/", router);

app.use((req, res, next) => {
  return res.status(404).sendFile(__dirname + "/views/404.html");
});

server.listen(PORT, () =>
  console.log(`Server bound to http://localhost:${PORT}`)
);
