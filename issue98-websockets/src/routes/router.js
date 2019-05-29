const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../db/db");

const bodyparser = require("body-parser");
const uuid = require("uuid/v1");

// middlewares
router.use(
  bodyparser.urlencoded({
    extended: true
  })
);

const applyRouter = () => {
  const redirectLogin = (req, res, next) => {
    // req.session.userId ? next() : res.redirect("/");
    next();
  };
  const redirectRoom = (req, res, next) => {
    // req.session.userId ? res.redirect("/room") : next();
    next();
  };

  // routes
  router.get("/", redirectRoom, (req, res) => {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  });

  router.get("/room", redirectLogin, (req, res) => {
    res.sendFile(path.join(__dirname, "../views/chatroom.html"));
  });

  router.post("/room", redirectLogin, (req, res) => {
    const { username } = req.body;
    const userId = uuid();

    if (db.addUser({ id: userId, username })) {
      req.session.userId = userId;
      return res.sendFile(path.join(__dirname, "../views/chatroom.html"));
    }

    // TODO username already in use warning
  });
};

module.exports = session => {
  router.use(session);
  applyRouter();

  return router;
};
