/**
 * ! DOM Targets Area
 */

// song playlist
const songListDiv = document.getElementById("playlist-songs");
const playPath = document.getElementById("play");
const pausePath = document.getElementById("pause");
const closeBtn = document.querySelector(".playlist-close");
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");

// Buttons
const shuffleBtn = document.getElementById("shuffle");

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
  userData.songs = userData?.songs.filter((song) => song.id !== id.toString());
  renderSongs(userData?.songs);
  if (userData.songs.length === 0) {
    resetButton();
  }
  console.log(userData?.songs);
};

/**
 * ! Delete Button Component
 */

const deleteBtn = (id) => {
  return `<button onclick="deleteSong(${id})" class="playlist-song-delete" aria-label="delete">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle id="delete-Btn" cx="8" cy="8" r="8" fill="#4d4d62"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/>
  </svg>
</button>`;
};

/**
 * ! Display currently playing song
 */

const playerDisplay = (song) => {
  const playingSong = document.getElementById("player-song-title");
  const songArtist = document.getElementById("player-song-artist");

  playingSong.textContent = song.title;
  songArtist.textContent = song.artist;
};

/**
 * ! Song highlighter
 */

const songHighlighter = (id) => {
  const allSongsLabel = document.querySelectorAll(".playlist-song");
  allSongsLabel.forEach((song) => {
    song.removeAttribute("aria-current");
  });
  allSongsLabel[id].ariaCurrent = "true";
};

/**
 * ! renderSongs on the HTML
 */

const renderSongs = (array) => {
  const songList = array
    ?.map((song) => {
      return `
      <li id=${song.id}>
        <div class="playlist-song">
            <button class="playlist-song-info">
                <p class="playlist-song-title">${song.title}</p>
                <p class="playlist-song-artist">${song.artist}</p>
                <div class="playlist-song-duration">
                    <p>${song.duration}</p>
                </div>
            </button>
            ${deleteBtn(song.id)}
        </div>
      </li>
    `;
    })
    .join("");

  songListDiv.innerHTML = songList;
};

/**
 * ! Music player various buttons section here
 */

// audio API
const audio = new Audio();

const playSong = (song) => {
  userData.currentSong = song;
  audio.src = song.src;
  audio.title = song.title;
  audio.currentTime = userData.songCurrentTime;
  playPath.classList.add("playing");
  audio.play();
  songHighlighter(song.id);
  playerDisplay(song);
};

const pauseSong = () => {
  audio.pause();
  userData.songCurrentTime = audio.currentTime;
};

const nextSong = () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0]);
  } else {
    const songIndex = userData?.songs.indexOf(userData.currentSong);
    const nextSongOnList = userData?.songs[songIndex + 1];
    userData = {
      ...userData,
      currentSong: nextSongOnList,
      songCurrentTime: 0,
    };
    playSong(nextSongOnList);
  }
};

const previousSong = () => {
  if (userData?.currentSong === null) return;
  else {
    const songIndex = userData?.songs.indexOf(userData.currentSong);
    const previousSong = userData?.songs[songIndex - 1];
    userData = {
      ...userData,
      currentSong: previousSong,
      songCurrentTime: 0,
    };
    playSong(previousSong);
  }
};

/**
 * ? shuffle songs and render on HTML
 */

const shuffle = () => {
  userData.songs = userData?.songs.sort(() => Math.random() - 0.5);
  renderSongs(userData?.songs);
};

/**
 * ! Event Listeners Section here
 */

shuffleBtn.addEventListener("click", shuffle);

playPath.addEventListener("click", () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0]);
  } else {
    playSong(userData?.currentSong);
  }
});

pausePath.addEventListener("click", () => {
  playPath.classList.remove("playing");
  pauseSong();
});

nextBtn.addEventListener("click", () => {
  nextSong();
});

previousBtn.addEventListener("click", () => {
  previousSong();
});

/**
 * ! The songs playlist reset button here with eventListener
 */

const resetButton = () => {
  let resetBtn = document.createElement("button");
  let resetText = document.createTextNode("Reset Playlist");
  resetBtn.appendChild(resetText);
  resetBtn.id = "resetBtn";
  resetBtn.ariaLabel = "reset playlist";
  resetBtn.classList.add("player-reset-btn");
  songListDiv.appendChild(resetBtn);

  resetBtn?.addEventListener("click", () => {
    userData.songs = songsDatabase;
    renderSongs(userData?.songs);
    resetBtn.remove();
  });

  return resetBtn;
};

(() => {
  renderSongs(userData?.songs);
})();
