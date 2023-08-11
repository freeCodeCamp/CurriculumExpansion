/**
 * ! DOM Targets Area
 */

// song playlist
const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

//  Songs array creation
const cover =
  "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg";
const songsDatabase = [
  {
    id: "0",
    title: "Scratching The Surface",
    cover,
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
  },
  {
    id: "1",
    title: "Can't Stay Down",
    cover,
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
  },
  {
    id: "2",
    title: "Still Learning",
    cover,
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
  },
  {
    id: "3",
    title: "Cruising for a Musing",
    cover,
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cruising-for-a-musing.mp3",
  },
  {
    id: "4",
    title: "Never Not Favored",
    cover,
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/never-not-favored.mp3",
  },
  {
    id: "5",
    title: "From the Ground Up",
    cover,
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/from-the-ground-up.mp3",
  },
  {
    id: "6",
    title: "Walking on Air",
    cover,
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/walking-on-air.mp3",
  },
  {
    id: "7",
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    cover,
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: "8",
    title: "The Surest Way Out is Through",
    cover,
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/the-surest-way-out-is-through.mp3",
  },
  {
    id: "9",
    title: "Chasing That Feeling",
    cover,
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/chasing-that-feeling.mp3",
  },
];

/**
 * ! A State management object
 */

let userData = {
  songs: songsDatabase,
  currentSong: null,
  songCurrentTime: 0,
};

/**
 * ! Delete Button Function
 */

const deleteSong = (id) => {
  if (userData?.currentSong?.id === id.toString()) {
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    pauseSong();
    setPlayerDisplay();
  }
  userData.songs = userData?.songs.filter((song) => song.id !== id.toString());
  renderSongs(userData?.songs);
  setPlayButtonAccessibleText();
  if (userData.songs.length === 0) {
    resetButton();
  }
  console.log(userData?.songs);
};

/**
 * ! Display currently playing song
 */

const setPlayerDisplay = (title, artist) => {
  const playingSong = document.getElementById("player-song-title");
  const songArtist = document.getElementById("player-song-artist");

  playingSong.textContent = title ? title : "";
  songArtist.textContent = artist ? artist : "";
};

/**
 * ! Song highlighter
 */

const songHighlighter = (id) => {
  const playlistSongElements = document.querySelectorAll(".playlist-song");
  const songToHighlight = document.getElementById(`song-${id}`);

  playlistSongElements.forEach((song) => {
    song.removeAttribute("aria-current");
  });
  songToHighlight.setAttribute("aria-current", "true");
};

/**
 * ! renderSongs on the HTML
 */

const renderSongs = (array) => {
  const playlistHTML = array
    ?.map((song) => {
      return `
      <li id="song-${song.id}" class="playlist-song">
        <button class="playlist-song-info" onclick="playSong(${song.id})">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
        </button>
        <button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="8" fill="#4d4d62"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/>
          </svg>
        </button>
      </li>
    `;
    })
    .join("");

  playlistSongs.innerHTML = playlistHTML;
};

/**
 * ! Music player various buttons section here
 */

// audio API
const audio = new Audio();

const playSong = (songId) => {
  const song = userData?.songs.find((song) => song.id === songId.toString());
  audio.src = song.src;
  audio.title = song.title;
  if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData.songCurrentTime;
  }
  userData.currentSong = song;
  playButton.classList.add("playing");
  audio.play();
  songHighlighter(song.id);
  setPlayerDisplay(song.title, song.artist);
};

const pauseSong = () => {
  audio.pause();
  userData.songCurrentTime = audio.currentTime;
  playButton.classList.remove("playing");
};

const nextSong = () => {
  console.log(userData);
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    const currentSongIndex = userData?.songs.indexOf(userData.currentSong);
    const nextSong = userData?.songs[currentSongIndex + 1];

    playSong(nextSong.id);
    setPlayButtonAccessibleText();
  }
};

const previousSong = () => {
  if (userData?.currentSong === null) return;
  else {
    const currentSongIndex = userData?.songs.indexOf(userData.currentSong);
    const previousSong = userData?.songs[currentSongIndex - 1];

    playSong(previousSong.id);
    setPlayButtonAccessibleText();
  }
};

/**
 * ? shuffle songs and render on HTML
 */

const shuffle = () => {
  userData.songs = userData?.songs.sort(() => Math.random() - 0.5);
  renderSongs(userData?.songs);
  userData.currentSong = null;
  userData.songCurrentTime = 0;
  pauseSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
};

const setPlayButtonAccessibleText = () => {
  const song = userData?.currentSong || userData?.songs[0];

  playButton.setAttribute("aria-label", `Play ${song.title}`);
};

/**
 * ! Event Listeners Section here
 */

playButton.addEventListener("click", () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    playSong(userData?.currentSong.id);
  }
});

pauseButton.addEventListener("click", () => {
  pauseSong();
});

nextButton.addEventListener("click", () => {
  nextSong();
});

previousButton.addEventListener("click", () => {
  previousSong();
});

shuffleButton.addEventListener("click", shuffle);

/**
 * ! The songs playlist reset button here with eventListener
 */

const resetButton = () => {
  const resetButton = document.createElement("button");
  const resetText = document.createTextNode("Reset Playlist");
  resetButton.appendChild(resetText);
  resetButton.id = "reset";
  resetButton.ariaLabel = "Reset playlist";
  playlistSongs.appendChild(resetButton);

  resetButton?.addEventListener("click", () => {
    userData.songs = songsDatabase;
    renderSongs(userData?.songs);
    resetButton.remove();
  });

  return resetButton;
};

renderSongs(userData?.songs);
setPlayButtonAccessibleText();
