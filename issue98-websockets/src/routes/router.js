'use strict'

const express           = require("express");
const router            = express.Router();

const db                = require("../db/db");


const redirectLogin = (req, res, next) => {
  !req.session.userId ? res.redirect("/") : next();
};

const redirectRoom = (req, res, next) => {
  req.session.userId ? res.redirect("/room") : next();    
};

// Home page
router.get("/", redirectRoom, (req, res) => {    
  res.render("login.html");
});

router.post("/", redirectRoom, (req, res) => {    
  const { username } = req.body;

  if (db.validateUsername(username)) {
    const id = db.addUser(username);
    
    req.session.userId = id;
    return res.redirect("/room");
  }

  res.redirect("/");
});

// Chatroom page
router.get("/room", redirectLogin, (req, res) => { 
  return res.render("chatroom.html");
});

router.post("/logout", redirectLogin, (req, res) => { 
  
  // Removes the stored session
  req.session.destroy(err => {
    if (err) {
      res.redirect("/room")
    }

    db.removeUser(req.session.userId)

    res.clearCookie(req.session.cookie.name)
    res.redirect("/")

  });
});




module.exports =  router;
