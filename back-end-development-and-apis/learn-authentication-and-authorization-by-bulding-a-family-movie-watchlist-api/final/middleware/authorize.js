function authorizeModification(req, res, next) {
  const requestedUserId = parseInt(req.params.userId);
  const { role, id } = req.user;

  if (role === 'parent') {
    return next();
  }

  if (role === 'child' && id === requestedUserId) {
    return next();
  }

  return res.status(403).json({ message: 'Access denied' });
}

module.exports = { authorizeModification };
