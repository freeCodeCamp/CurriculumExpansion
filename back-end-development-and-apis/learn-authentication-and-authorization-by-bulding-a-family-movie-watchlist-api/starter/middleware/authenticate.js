// TODO: Import verifyToken from '../utils/jwt'

// TODO: Implement the authenticate middleware function
// - Check req.headers.authorization for a Bearer token
// - Return 401 with { message: 'No token provided' } if the header is missing or malformed
// - Extract the token and call verifyToken
// - Return 401 with { message: 'Invalid or expired token' } if the result is null
// - Attach the decoded payload to req.user and call next()
