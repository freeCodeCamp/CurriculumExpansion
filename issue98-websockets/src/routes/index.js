const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
});

router.use("/room", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/chatroom.html"));
});

module.exports = router;
