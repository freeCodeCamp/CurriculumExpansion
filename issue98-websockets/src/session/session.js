const session = require('express-session'),        
      sessionStore = new session.MemoryStore()


// Creates a session and stores in a cookie
module.exports = session({
    name: "freeCodeCampChat",    
    secret: "secret validator",               // this secret is a signer for the session
    resave: false,                            // do not save unmodified sessions
    saveUninitialized: false,                 // do not empty sessions    
    store: sessionStore,
    cookie: {        
        maxAge: 1000 * 60 * 60 * 2           // cookie expire time (2 hours)     
    }
})