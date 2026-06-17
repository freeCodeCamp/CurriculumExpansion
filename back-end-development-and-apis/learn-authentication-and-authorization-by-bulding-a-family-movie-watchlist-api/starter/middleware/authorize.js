// TODO: Implement the authorizeModification middleware function
// Authorization rules:
// - parents can add, update, or delete movies on any family member's watchlist
// - children can only add, update, or delete movies on their own watchlist
//
// Hints:
// - The authenticated user is available on req.user (set by the authenticate middleware)
// - The target user's id is available as req.params.userId (parse it to an integer)
// - Return 403 with { message: 'Access denied' } if the check fails
//
// TODO: Export authorizeModification as a named export
