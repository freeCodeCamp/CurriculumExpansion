const session = require('express-session')
const uuid = require("uuid")

// Creates a session with unique infier
module.exports = () => session({ secret: uuid() })