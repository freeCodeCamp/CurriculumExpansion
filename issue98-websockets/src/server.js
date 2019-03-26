// dependencies
const express = require("express");
const app = express();
const path = require("path");

// components
const routes = require("./routes");
const IOserver = require("./socket")(app);

app.set("views", path.join(__dirname, "views"));

// middlewares
app.use(express.static("public"));

app.use("/", routes);

const PORT = process.env.PORT || 3000;
IOserver.listen(PORT, () => console.log(`Server bound to PORT ${PORT}`));
