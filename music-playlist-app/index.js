const playPauseBtn = document.getElementById("play-btn");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const displayCurrentSong = document.querySelector(".text-container");
const playlistContainer = document.querySelector(".playlist-container");
const shuffleBtn = document.getElementById("shuffle-btn");
let isPlaying = false;
let currentSong = 0;

let playlist = [
  {
    id: "We-Are-Going-to-Make-it",
    audio: "audio/We-Are-Going-to-Make-it.mp3",
    title: "We Are Going to Make it",
    artist: "Quincy Larson",
  },
  {
    id: "Cant-Stay-Down",
    audio: "audio/Can't-Stay-Down.mp3",
    title: "Can't Stay Down",
    artist: "Quincy Larson",
  },
  {
    id: "Collider-in-My-Head",
    audio: "audio/Collider-in-My-Head.mp3",
    title: "Collider in My Head",
    artist: "Quincy Larson",
  },
  {
    id: "Cruising-for-a-Musing",
    audio: "audio/Cruising-for-a-Musing.mp3",
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
  },
  {
    id: "The-Surest-Way-Out-is-Through",
    audio: "audio/The-Surest-Way-Out-is-Through.mp3",
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
  },
];

let song = new Audio(playlist[currentSong].audio);

function createPlaylist() {
  playlist.map(
    (song, id) =>
      (playlistContainer.innerHTML += `
  <div id=song${id} class="img-text-container">
    <div id=${playlist[id].id} class="song-text-container">
      <p class="song">${song.title}</p>
      <p>- ${song.artist}</p>
    </div>
    <div class="btn-container">
      <button class="delete-btn btn">Delete</button>
    </div>
  </div>
  `)
  );
}
createPlaylist();

function displaySong(song = "", artist = "") {
  displayCurrentSong.innerHTML = `
  <p class="song">${song}</p>
  <p id="artist">${artist}</p>
`;
}

function playPauseSong() {
  isPlaying ? song.pause() : song.play();
  isPlaying = !isPlaying;
  displaySong(playlist[currentSong].title, playlist[currentSong].artist);
}

function goToPreviousSong() {
  song.pause();
  currentSong === 0 ? (song.currentTime = 0) : currentSong--;
  song = new Audio(playlist[currentSong].audio);
  song.play();
  displaySong(playlist[currentSong].title, playlist[currentSong].artist);
}

function goToNextSong() {
  song.pause();
  currentSong === playlist.length - 1 ? (currentSong = 0) : currentSong++;
  song = new Audio(playlist[currentSong].audio);
  song.play();
  displaySong(playlist[currentSong].title, playlist[currentSong].artist);
}

function shufflePlaylist() {
  let playlistLength = playlist.length;

  while (playlistLength != 0) {
    let randomIndex = Math.floor(Math.random() * playlistLength);
    playlistLength--;

    [playlist[playlistLength], playlist[randomIndex]] = [
      playlist[randomIndex],
      playlist[playlistLength],
    ];
  }
  song.pause();
  isPlaying = false;
  currentSong = 0;
  song = new Audio(playlist[currentSong].audio);
  playlistContainer.innerHTML = "";
  displaySong();
  createPlaylist();
  deleteSong();
  chooseSong();
}

function deleteSong() {
  document.querySelectorAll(".delete-btn").forEach(function (btn, songId) {
    btn.addEventListener("click", function () {
      let deleteSong = confirm("Are you sure you want to delete this song?");
      if (deleteSong) {
        song.pause();
        isPlaying = false;
        displaySong();
        document.getElementById(`song${songId}`).remove();
        playlist.splice(songId, 1);
      }
    });
  });
}
deleteSong();

function chooseSong() {
  document.querySelectorAll(".song-text-container").forEach(function (songDiv) {
    songDiv.addEventListener("click", function () {
      song.pause();
      isPlaying = false;
      currentSong = playlist.findIndex((obj) => obj.id === songDiv.id);
      song = new Audio(playlist[currentSong].audio);
      playPauseSong();
    });
  });
}
chooseSong();

playPauseBtn.addEventListener("click", playPauseSong);
previousBtn.addEventListener("click", goToPreviousSong);
nextBtn.addEventListener("click", goToNextSong);
shuffleBtn.addEventListener("click", shufflePlaylist);
