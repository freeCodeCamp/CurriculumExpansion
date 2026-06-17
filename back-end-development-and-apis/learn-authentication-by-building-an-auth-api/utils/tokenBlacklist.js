const blacklist = new Set();

function blacklistToken(token) {
  blacklist.add(token);
}

function isBlacklisted(token) {
  return blacklist.has(token);
}

module.exports = { blacklistToken, isBlacklisted };
