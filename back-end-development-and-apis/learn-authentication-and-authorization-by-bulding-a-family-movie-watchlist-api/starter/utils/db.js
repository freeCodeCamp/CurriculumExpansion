const fs = require("fs");
const path = require("path");
const users = require("../data/users.json");

const WATCHLISTS_PATH = path.join(__dirname, "../data/watchlists.json");

function readWatchlists() {
  return JSON.parse(fs.readFileSync(WATCHLISTS_PATH, "utf-8"));
}

function writeWatchlists(watchlists) {
  fs.writeFileSync(WATCHLISTS_PATH, JSON.stringify(watchlists, null, 2));
}

function findByUsername(username) {
  return users.find((u) => u.username === username) || null;
}

function findById(id) {
  return users.find((u) => u.id === id) || null;
}

function getWatchlist(userId) {
  if (!findById(userId)) {
    return null;
  }

  const watchlists = readWatchlists();

  return watchlists[userId] || [];
}

function addMovie(userId, movieData) {
  if (!findById(userId)) {
    return null;
  }

  const watchlists = readWatchlists();
  const list = watchlists[userId] || [];
  const newId = list.length > 0 ? Math.max(...list.map((m) => m.id)) + 1 : 1;

  const movie = {
    id: newId,
    title: movieData.title,
    genre: movieData.genre,
    watched: false,
  };

  list.push(movie);
  watchlists[userId] = list;
  writeWatchlists(watchlists);

  return movie;
}

function updateMovie(userId, movieId, updates) {
  if (!findById(userId)) {
    return null;
  }

  const watchlists = readWatchlists();
  const list = watchlists[userId] || [];
  const index = list.findIndex((m) => m.id === movieId);

  if (index === -1) {
    return null;
  }

  list[index] = { ...list[index], ...updates, id: movieId };
  watchlists[userId] = list;
  writeWatchlists(watchlists);

  return list[index];
}

function deleteMovie(userId, movieId) {
  if (!findById(userId)) {
    return null;
  }

  const watchlists = readWatchlists();
  const list = watchlists[userId] || [];
  const index = list.findIndex((m) => m.id === movieId);

  if (index === -1) {
    return null;
  }

  list.splice(index, 1);
  watchlists[userId] = list;
  writeWatchlists(watchlists);

  return true;
}

module.exports = {
  findByUsername,
  findById,
  getWatchlist,
  addMovie,
  updateMovie,
  deleteMovie,
};
