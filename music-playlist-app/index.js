const displayCurrentSong = document.querySelector(".text-container");
const playlistContainer = document.querySelector(".playlist-container");

// This is the first introduction to getElementById
const playPauseBtn = document.getElementById("play-btn");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
let isPlaying = false;
let currentSong = 0;

// This could be a nice review for objects nested inside arrays and how to access those properties
let playlist = [
  {
    id: "we-are-going-to-make-it",
    audio: "audio/We-Are-Going-to-Make-it.mp3",
    title: "We Are Going to Make it",
    artist: "Quincy Larson",
  },
  {
    id: "cant-stay-down",
    audio: "audio/Can't-Stay-Down.mp3",
    title: "Can't Stay Down",
    artist: "Quincy Larson",
  },
  {
    id: "collider-in-my-head",
    audio: "audio/Collider-in-My-Head.mp3",
    title: "Collider in My Head",
    artist: "Quincy Larson",
  },
  {
    id: "cruising-for-a-musing",
    audio: "audio/Cruising-for-a-Musing.mp3",
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
  },
  {
    id: "the-surest-way-out-is-through",
    audio: "audio/The-Surest-Way-Out-is-Through.mp3",
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
  },
];

// First mention of the Audio constructor
let song = new Audio(playlist[currentSong].audio);

/**
 *
 * This is the first introduction to map.
 * We could stress how map is being used here to create a new array to render this HTML.
 * I believe this is also the first time innerHTML is being used. Maybe we could point out the differences between textContent and innerHTML.
 * Lastly, this is the first time template literals are being taught.
 * This would be the time to teach string interpolation
 *
 *
 */
function createPlaylist() {
  playlist.map(
    (song, id) =>
      (playlistContainer.innerHTML += `
    <li>
      <div id=song${id} class="play-song-btn-container">
        <button id=${playlist[id].id} type="button" class="song-btn">
          <span class="sr-only">Play</span>${song.title}
          <span class="sr-only">by</span>
          - ${song.artist}
        </button>
        <div class="btn-container">
          <span class="sr-only">Delete ${song.title}</span>
          <button type="button" class="delete-btn btn">Delete</button>
        </div>
      </div>
    </li>
  `)
  );
}

// This is the first time teaching default parameters.
function displaySong(song = "", artist = "") {
  displayCurrentSong.innerHTML = `
  <p class="song">${song}</p>
  <p id="artist">${artist}</p>
`;
}

function playPauseSong() {
  if (isPlaying) {
    song.pause();
    playPauseBtn.setAttribute(
      "aria-label",
      `Play ${playlist[currentSong].title}`
    );
  } else {
    song.play();
    playPauseBtn.setAttribute(
      "aria-label",
      `Pause ${playlist[currentSong].title}`
    );
  }
  // This might be the first time teaching the logical NOT operator.
  isPlaying = !isPlaying;
  displaySong(playlist[currentSong].title, playlist[currentSong].artist);
}

function goToPreviousSong() {
  song.pause();
  currentSong === 0 ? (song.currentTime = 0) : currentSong--;
  song = new Audio(playlist[currentSong].audio);
  song.play();
  playPauseBtn.setAttribute(
    "aria-label",
    `Pause ${playlist[currentSong].title}`
  );
  displaySong(playlist[currentSong].title, playlist[currentSong].artist);
}

function goToNextSong() {
  song.pause();
  currentSong === playlist.length - 1 ? (currentSong = 0) : currentSong++;
  song = new Audio(playlist[currentSong].audio);
  song.play();
  playPauseBtn.setAttribute(
    "aria-label",
    `Pause ${playlist[currentSong].title}`
  );
  displaySong(playlist[currentSong].title, playlist[currentSong].artist);
}

function shufflePlaylist() {
  let playlistLength = playlist.length;

  while (playlistLength != 0) {
    let randomIndex = Math.floor(Math.random() * playlistLength);
    playlistLength--;

    // First time teaching array destructing.
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
  // This is the first time where forEach and addEventListener is being introduced
  document.querySelectorAll(".delete-btn").forEach(function (btn, songId) {
    btn.addEventListener("click", function () {
      let deleteSong = confirm("Are you sure you want to delete this song?");
      if (deleteSong) {
        song.pause();
        isPlaying = false;
        displaySong();
        document.getElementById(`song${songId}`).remove();
        // This might be the first time where splice is introduced
        playlist.splice(songId, 1);
      }
    });
  });
}
deleteSong();

function chooseSong() {
  document.querySelectorAll(".song-btn").forEach(function (songBtn) {
    songBtn.addEventListener("click", function () {
      song.pause();
      isPlaying = false;
      // This is the first mention of findIndex
      currentSong = playlist.findIndex((obj) => obj.id === songBtn.id);
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
