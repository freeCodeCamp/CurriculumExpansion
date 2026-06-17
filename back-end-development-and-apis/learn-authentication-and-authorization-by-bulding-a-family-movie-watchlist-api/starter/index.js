const express = require("express");
require("dotenv").config();
const helmet = require("helmet");

const watchlistRoutes = require("./routes/watchlist");
// TODO: Import authRoutes from './routes/auth'

const PORT = process.env.PORT || 9000;
const app = express();

app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Family Movie Watchlist API" });
});

// TODO: Register authRoutes at /api/auth
app.use("/api/watchlist", watchlistRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

module.exports = app;
