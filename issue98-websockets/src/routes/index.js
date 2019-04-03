const express = require("express");
const router = express.Router();
const path = require("path");

router.use((req, res, next) => {
  //validate

  next();
});

router.get("/", (req, res) => {
  res.redirect("/login");
  // res.sendFile(path.join(__dirname, "../views/chatroom.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
});

router.get("/rooms", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/rooms.html"));
});

router.post("/rooms", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/rooms.html"));
});

router.get("/rooms/:id", (req, res) => {
  const roomId = req.params.id;
  res.sendFile(path.join(__dirname, "../views/chatroom.html"));
});

module.exports = router;
