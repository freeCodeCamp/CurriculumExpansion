// dependencies
const express = require("express");
const app = express();
const path = require("path");

// components
const server = require("./socket")(app);
const routes = require("./routes");

// configs
app.set("views", path.join(__dirname, "views"));

// middlewares
app.use(express.static("public"));
app.use("/", routes);

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/views/404.html");
});

server.listen(process.env.PORT || 3000);
