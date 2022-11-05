const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res) => {
  let songs = fs.readFileSync("./data/songsDetail.json");
  songs = JSON.parse(songs);
  res.render("home", {
    title: "X-Play | Music player",
    songs: songs.Songs
  });
});

module.exports = router;