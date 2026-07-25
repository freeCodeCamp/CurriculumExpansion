const express = require('express');
const authenticate = require('../middleware/authenticate');
const authorizeRole = require('../middleware/authorize');
const { readUsers } = require('../utils/db');

const router = express.Router();

router.get('/users', authenticate, authorizeRole('admin'), (req, res) => {
  const users = readUsers().map(({ passwordHash, ...user }) => user);
  res.json({ users });
});

module.exports = router;
