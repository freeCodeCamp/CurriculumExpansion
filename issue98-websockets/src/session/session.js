const session = require('express-session')
const uuid = require("uuid")

const secureEnabled = process.env.NODE_ENV === 'production'

// Creates a session and stores in a cookie
module.exports = session({
    name: "freeCodeCampChat",
    secret: uuid(),
    resave: false,                            // do not save unmodified sessions
    saveUninitialized: false,                 // do not empty sessions    
    cookie: {
        // path: "/room",
        maxAge: 1000 * 60 * 60 * 2,           // cookie's expire time (2 hours)
        secure: secureEnabled                 // enables secure if in production
    }
})