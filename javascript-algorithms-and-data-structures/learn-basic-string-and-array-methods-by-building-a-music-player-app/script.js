 //  Songs array creation
const songs = [
  {
    id:"0",
    title: "Scratching The Surface",
    cover:
      "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
  },
  {
    id:"1",
    title: "Can't Stay Down",
    cover:
      "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
  },
  {
    id:"2",
    title: "Still Learning",
    cover:
      "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
  },
  {
    id:"3",
    title: "Cruising for a Musing",
    cover:
      "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cruising-for-a-musing.mp3",
  },
  {
    id:"4",
    title: "Never Not Favored",
    cover:
      "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/never-not-favored.mp3",
  },
  {
    id:"5",
    title: "From the Ground Up",
    cover:
      "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/from-the-ground-up.mp3",
  },
  {
    id:"6",
    title: "Walking on Air",
    cover:
      "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/walking-on-air.mp3",
  },
  {
    id:"7",
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    cover:
      "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id:"8",
    title: "The Surest Way Out is Through",
    cover:
      "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/the-surest-way-out-is-through.mp3",
  },
  {
    id:"9",
    title: "Chasing That Feeling",
    cover:
      "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/chasing-that-feeling.mp3",
  },
];

// State Management: useState Hook
function useState(array) {
  let state = array;
  function getState() {
    return state;
  }
  function setState(newState) {
    state = newState;
  }
  return [getState, setState];
}

function renderSongs(array) {
  // map Array Method
  const songList = array.map((song,index) => {
      return `
        <li id=${song.id}>
          <div class="playlist-song" ${index === currentIndex() && `aria-current="true"`}>
              <button class="playlist-song-info">
                  <p class="playlist-song-title">${song.title}</p>
                  <p class="playlist-song-artist">${song.artist}</p>
                  <div class="playlist-song-duration">
                      <p>${song.duration}</p>
                  </div>
              </button>
              <button class="playlist-song-delete" aria-label="delete">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle id="delete-Btn" cx="8" cy="8" r="8" fill="#4d4d62"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/>
                </svg>
              </button>
          </div>
        </li>
      `;
      }).join('');

      songListDiv.innerHTML = songList;

}


// song playlist
const songListDiv = document.getElementById("playlist-songs");
const playPath = document.getElementById('play');
const closeBtn = document.querySelector(".playlist-close");

// audio API
const audio = new Audio();

const [playlist,setPlaylist] = useState([...songs]);

const [currentIndex,setCurrentIndex] = useState(0);

const [currentTime,setCurrentTime] = useState(0);

const [currentSong,setCurrentSong] = useState(playlist()[currentIndex()]);

// first time the matchMedia is being taught. Make sure to introduce with example in the steps
let view = window.matchMedia("(max-width: 700px)");

function playSong(song) {
  // using indesOf method
  setCurrentIndex(playlist().indexOf(song));

  playPath.style.fill="#f1be32";

  audio.src = song.src;
  audio.title = song.title;
  audio.currentTime = currentTime();

  audio.play();
  setCurrentSong(song.title);

  updatePlayingSongBackground(currentIndex());
  renderSongDisplay(currentIndex());
}

function pauseSong() {
  audio.pause();
  setCurrentTime(audio.currentTime);
  playPath.style.fill="#fbf9f9";
}

function togglePlay() {
  playSong(playlist()[currentIndex()]);
  updatePlayingSongBackground(currentIndex());
}

function toggleClosePlaylist() {
    if (songListDiv.style.visibility === "hidden") {
        songListDiv.style.visibility = "visible";
        songListDiv.style.display = "flex";
        closeBtn.setAttribute('aria-expanded', true);
        return;

    } else {
        songListDiv.style.visibility = "hidden";
        songListDiv.style.display = "none";
        closeBtn.setAttribute('aria-expanded', false);
    }
}

// player controls
function nextSong() {
  const nextIndex = (currentIndex() + 1) % playlist().length;
  setCurrentTime(0);
  clearSongBgs();
  playSong(playlist()[nextIndex]);
  setCurrentIndex(nextIndex);

//   keeping keyboard indicator in sync with array keyls/selected indicator.
  if(document.activeElement.classList.contains('playlist-song-info')) {
    const nextSongDivs = document.querySelectorAll(".playlist-song-info");
    nextSongDivs[currentIndex()].focus();
  }
}

function previousSong() {
  const prevIndex = (currentIndex() - 1 + playlist().length) % playlist().length;
  setCurrentTime(0);
  clearSongBgs();
  playSong(playlist()[prevIndex]);
  setCurrentIndex(prevIndex);

//   keeping keyboard indicator in sync with array keyls/selected indicator.
  if(document.activeElement.classList.contains('playlist-song-info')) {
      const previousSongDivs = document.querySelectorAll(".playlist-song-info");
      previousSongDivs[currentIndex()].focus();
    }
}

function renderSongDisplay(currentIndex) {
  document.getElementById("player-song-title").innerText = playlist()[currentIndex].title;
  document.getElementById("player-song-artist").innerText = playlist()[currentIndex].artist;
  document.getElementById("player-album-art").innerHTML = `<img src="${playlist()[currentIndex].cover}" alt="song cover art" />`;
}


// playlist display
function clearSongBgs() {
    document.querySelectorAll(".playlist-song").forEach(song => {
        song.removeAttribute('aria-current');
    });
}

function updatePlayingSongBackground(newIndex) {
    const updateSongDivs = document.querySelectorAll(".playlist-song");
    updateSongDivs[newIndex].setAttribute('aria-current', true);
}

function playSelectedSong(song, songBtn) {
  playSong(song);
  clearSongBgs();
  songBtn.setAttribute('aria-current', true);
}


function shuffle() {
  // first time the spread operator is being taught. Make sure to introduce with example in the steps
  let songsCopy = [...playlist()];
  // using array sort method and Math.random method
  songsCopy.sort(() => 0.5 - Math.random());
  renderSongs(songsCopy);
  songPlayingInList()
  setPlaylist(songsCopy);
  clearSongBgs();
  updatePlayingSongBackground(currentIndex());
  setDeleteEventListener();
  setSongEventListener();
}

function songPlayingInList() {
  document.querySelectorAll('.playlist-song').forEach((songDiv,index) => {
    let songPlayingInList = songDiv.querySelector('.playlist-song-info').firstElementChild.innerText;
    if (songPlayingInList === currentSong()) {
      setCurrentIndex(index);
    }
  });
}

function resetButton() {
  let resetBtn = document.createElement('button');
  let resetText = document.createTextNode('Reset Playlist');
  resetBtn.appendChild(resetText);
  resetBtn.ariaLabel = 'reset playlist';
  resetBtn.classList.add('player-reset-btn');
  resetBtn.onclick = function () {
  renderSongs(songs);
  songPlayingInList()
  setPlaylist([...songs]);
  clearSongBgs();
  updatePlayingSongBackground(currentIndex());
  setDeleteEventListener();
  setSongEventListener();
  };

  return resetBtn;
}


function deleteSong(song){

  if(currentSong() == playlist()[song].title){
    audio.pause();
  }

  if(song === playlist().length - 1){
    // first time splice is introduced. make sure to provide explanation and example in the steps.
    playlist().splice(song);
  }

  playlist().splice(song,1);
  renderSongs(playlist());
  songPlayingInList()
  setPlaylist(playlist());
  clearSongBgs();

  if(playlist().length > 0){
    updatePlayingSongBackground(currentIndex());
  }

  setDeleteEventListener();
  setSongEventListener();

  if(playlist().length < 2) {
    songListDiv.append(resetButton());
  }
}

function setSongEventListener(){
  document.querySelectorAll('.playlist-song').forEach((songDiv,index) => {
    songDiv.querySelector('.playlist-song-info').addEventListener('click', () => playSelectedSong(playlist()[index], songDiv));
  });
};

function setDeleteEventListener(){
  document.querySelectorAll('.playlist-song').forEach((songDiv,index) => {
    songDiv.querySelector('.playlist-song-delete').addEventListener('click', () => deleteSong(index));
  });
};

// Set Media Query with JavaScript to close the playlist container when viewport is at 700px or smaller
function closePlaylist(view){
  // first time the matchMedia's property 'matches' is being taught. Make sure to introduce with example in the steps
  if (view.matches) {
    return toggleClosePlaylist();
  } else {
    songListDiv.style.visibility = "visible";
    songListDiv.style.display = "flex";
    closeBtn.setAttribute('aria-expanded', true);
  }
}

function setEventListeners(){
  // Event listeners
  document.querySelector(".play").addEventListener("click", togglePlay);
  document.querySelector(".pause").addEventListener("click", pauseSong);
  document.querySelector(".previous").addEventListener("click", previousSong);
  document.querySelector(".next").addEventListener("click", nextSong);
  document.querySelector(".shuffle").addEventListener("click", shuffle);
  closeBtn.addEventListener("click", toggleClosePlaylist);

  // continue playing next song
  audio.addEventListener("ended", nextSong);

  view.addEventListener("change", closePlaylist);

  // keyboardEvents
  window.addEventListener("keydown", (event) => {
      switch (true) {
          case (event.key === "ArrowUp"):
              previousSong();
              break
          case (event.key === "ArrowDown"):
              nextSong();
              break
          default:
      }
  })
}


function app() {
  renderSongs(playlist());
  updatePlayingSongBackground(currentIndex());
  renderSongDisplay(currentIndex());
  setEventListeners();
  setSongEventListener();
  setDeleteEventListener();
  closePlaylist(view);
}
