'use strict'

const express           = require("express");
const router            = express.Router();

const path              = require("path");
const db                = require("../db/db");


const redirectLogin = (req, res, next) => {
  !req.session.userId ? res.redirect("/") : next();
};

const redirectRoom = (req, res, next) => {
  req.session.userId ? res.redirect("/room") : next();    
};

// Home page
router.get("/", redirectRoom, (req, res) => {    
  res.sendFile(path.join(__dirname, "../views/login.html"));
});

router.post("/",  (req, res) => {    
  
});

router.get("/room", redirectLogin, (req, res) => { 

});

router.post("/room", (req, res) => { 
  return res.sendFile(path.join(__dirname, "../views/chatroom.html"));
});


module.exports =  router;
