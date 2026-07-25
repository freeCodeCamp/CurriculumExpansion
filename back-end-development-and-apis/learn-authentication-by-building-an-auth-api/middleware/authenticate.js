const { verifyToken } = require('../utils/jwt');
const { isBlacklisted } = require('../utils/tokenBlacklist');

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  if (isBlacklisted(token)) {
    return res.status(401).json({ message: 'Token has been invalidated. Please log in again.' });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }

  req.user = decoded;
  next();
}

module.exports = authenticate;
