const express = require("express");
const bcrypt = require("bcryptjs");
const { findByUsername } = require("../utils/db");
const { signToken } = require("../utils/jwt");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const user = findByUsername(username);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const match = await bcrypt.compare(password, user.passwordHash);

  if (!match) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = signToken({
    id: user.id,
    username: user.username,
    role: user.role,
  });

  res.json({ message: "Login successful", token });
});

module.exports = router;
