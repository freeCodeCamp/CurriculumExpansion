# User Stories

- When a `POST` request is made to `/api/auth/login` without a `username` or `password` field in the request body, the server should return a `400` status.

- When a `POST` request is made to `/api/auth/login` with a `username` that does not exist, the server should return a `401` status.

- When a `POST` request is made to `/api/auth/login` with a correct `username` but wrong `password`, the server should return a `401` status.

- When a `POST` request is made to `/api/auth/login` with valid credentials, the server should return a `200` status with a JSON body containing a `token` field.

- When a request is made to any watchlist route without an `Authorization` header, the server should return a `401` status.

- When a request is made to any watchlist route with a malformed or expired token, the server should return a `401` status.

- When an authenticated user makes a `GET` request to `/api/watchlist/:userId`, the server should return a `200` status with the watchlist for that user regardless of the requester's role.

- When an authenticated user with the `parent` role makes a `POST` request to `/api/watchlist/:userId/movies`, the server should return a `201` status and add the movie to that user's watchlist.

- When an authenticated user with the `child` role makes a `POST` request to `/api/watchlist/:userId/movies` where `:userId` belongs to another user, the server should return a `403` status.

- When an authenticated user with the `child` role makes a `POST` request to `/api/watchlist/:userId/movies` where `:userId` is their own, the server should return a `201` status and add the movie to their watchlist.

- When an authenticated user with the `parent` role makes a `PUT` request to `/api/watchlist/:userId/movies/:movieId`, the server should return a `200` status and update the movie on that user's watchlist.

- When an authenticated user with the `child` role makes a `PUT` request to `/api/watchlist/:userId/movies/:movieId` where `:userId` belongs to another user, the server should return a `403` status.

- When an authenticated user with the `child` role makes a `PUT` request to `/api/watchlist/:userId/movies/:movieId` where `:userId` is their own, the server should return a `200` status and update the movie.

- When an authenticated user with the `parent` role makes a `DELETE` request to `/api/watchlist/:userId/movies/:movieId`, the server should return a `200` status and remove the movie from that user's watchlist.

- When an authenticated user with the `child` role makes a `DELETE` request to `/api/watchlist/:userId/movies/:movieId` where `:userId` belongs to another user, the server should return a `403` status.

- When an authenticated user with the `child` role makes a `DELETE` request to `/api/watchlist/:userId/movies/:movieId` where `:userId` is their own, the server should return a `200` status and remove the movie.
