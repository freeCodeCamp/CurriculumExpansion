const express = require("express");
const {
  getWatchlist,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("../utils/db");
const authenticate = require("../middleware/authenticate");
const { authorizeModification } = require("../middleware/authorize");

const router = express.Router();

router.get("/:userId", authenticate, (req, res) => {
  const userId = parseInt(req.params.userId);
  const watchlist = getWatchlist(userId);

  if (!watchlist) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({ watchlist });
});

router.post(
  "/:userId/movies",
  authenticate,
  authorizeModification,
  (req, res) => {
    const userId = parseInt(req.params.userId);
    const { title, genre } = req.body;

    if (!title || !genre) {
      return res.status(400).json({ message: "Title and genre are required" });
    }

    const movie = addMovie(userId, { title, genre });

    if (!movie) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(201).json({ message: "Movie added", movie });
  },
);

router.put(
  "/:userId/movies/:movieId",
  authenticate,
  authorizeModification,
  (req, res) => {
    const userId = parseInt(req.params.userId);
    const movieId = parseInt(req.params.movieId);
    const updates = req.body;

    const movie = updateMovie(userId, movieId, updates);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json({ message: "Movie updated", movie });
  },
);

router.delete(
  "/:userId/movies/:movieId",
  authenticate,
  authorizeModification,
  (req, res) => {
    const userId = parseInt(req.params.userId);
    const movieId = parseInt(req.params.movieId);

    const result = deleteMovie(userId, movieId);

    if (!result) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json({ message: "Movie deleted" });
  },
);

module.exports = router;
