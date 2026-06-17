const express = require('express');
// TODO: Import bcrypt from 'bcryptjs'
// TODO: Import findByUsername from '../utils/db'
// TODO: Import signToken from '../utils/jwt'

const router = express.Router();

// TODO: Implement POST /login
// - Validate that username and password fields exist in req.body; return 400 if missing
// - Find the user by username using findByUsername; return 401 if not found
// - Use bcrypt.compare to verify the password against the stored hash; return 401 if no match
// - Sign a JWT with the user's id, username, and role using signToken
// - Return 200 with { message: 'Login successful', token }

module.exports = router;
