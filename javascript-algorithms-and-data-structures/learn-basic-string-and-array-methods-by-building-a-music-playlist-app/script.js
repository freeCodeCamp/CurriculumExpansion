
//  Songs array creation

const songs = [
    { title: "Scratching The Surface", cover: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg",artist: "Quincy Larson", duration: "4:25", src:"https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3"},
    { title: "Can't Stay Down", cover: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg", artist: "Quincy Larson", duration: "4:15" , src:"https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3"},
    { title: "Still Learning", cover: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg", artist: "Quincy Larson", duration: "3:51" , src:"https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3"},
    { title: "Cruising for a Musing", cover: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg", artist: "Quincy Larson", duration: "3:34" , src:"https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cruising-for-a-musing.mp3"},
    { title: "Never Not Favored", cover: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg", artist: "Quincy Larson", duration: "3:35" , src:"https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/never-not-favored.mp3"},
    { title: "From the Ground Up", cover: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg", artist: "Quincy Larson", duration: "3:12" , src:"https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/from-the-ground-up.mp3"},
    { title: "Walking on Air", cover: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg", artist: "Quincy Larson", duration: "3:25" , src:"https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/walking-on-air.mp3"},
    { title: "Can't Stop Me. Can't Even Slow Me Down.", cover: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg", artist: "Quincy Larson", duration: "3:52" , src:"https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stop-me-cant-even-slow-me-down.mp3"},
    { title: "The Surest Way Out is Through", cover: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg", artist: "Quincy Larson", duration: "3:10" , src:"https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/the-surest-way-out-is-through.mp3"},
    { title: "Chasing That Feeling", cover: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg", artist: "Quincy Larson", duration: "2:43" , src:"https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/chasing-that-feeling.mp3"},
  ];

  // song playlist
const songListDiv = document.getElementById("playlist__songs");
const songListUL = document.getElementById("playlist__songs-list");
const songPlaylistDiv = document.querySelector(".playlist");

const closeBtn = document.querySelector(".playlist__close");

function renderSongs(songs) {

// map Array Method
const songList = songs.map((song,index) => {
    return `
      <li >
        <button class="playlist__song" ${index === 0 && `aria-current="true"`}>
            <div class="playlist__song-info">
                <p class="playlist__song-title">${song.title}</p>
                <p class="playlist__song-artist">${song.artist}</p>
            </div>
            <div class="playlist__song-favorite">

            </div>
            <div class="playlist__song-duration">
                <p>${song.duration}</p>
            </div>
        </button>
      </li>
    `;
    }).join('');

    songListDiv.innerHTML = songList;
}
//
renderSongs(songs);


// audio API
const audio = new Audio();
// keepig track of time for each song
let currentTime = 0;

let currentIndex = 0;
updatePlayingSongBkg(currentIndex);

const playSVG = document.getElementById("play");

function playSong(song) {
    const oldIndex = currentIndex;
    // using indesOf method
    const newIndex = songs.indexOf(song);

    playSVG.style.fill="#f1be32";

    if (oldIndex !== newIndex) {
        clearSongBgs();
        updatePlayingSongBkg(newIndex)
    }

    audio.src = song.src;
    audio.title = song.title;
    audio.currentTime = currentTime;
    document.getElementById("player__song-title").innerText = song.title;
    document.getElementById("player__song-artist").innerText = song.artist;
    document.querySelector(".play").ariaCurrent = audio.title;
    document.getElementById("player__album-art").innerHTML = `<img src="${song.cover}" alt="song cover art" />`;
    audio.play();
    currentIndex = newIndex;

    updatePlayingSongBkg(newIndex);

}

function pauseSong() {
  audio.pause();
  currentTime = audio.currentTime;
  playSVG.style.fill="#fbf9f9";
}

function togglePlay() {
  playSong(songs[currentIndex]);
  updatePlayingSongBkg(currentIndex)

}

function toggleClosePlaylist() {
    if (songListDiv.style.visibility == "hidden") {
        songListDiv.style.visibility = "visible";
        songListDiv.style.display = "flex";
        closeBtn.setAttribute('aria-expanded', true);

    } else {
        songListDiv.style.visibility = "hidden";
        songListDiv.style.display = "none";
        closeBtn.setAttribute('aria-expanded', false);
    }
}

function currentSong() {
  return songs.find((song) => {
    song.src === audio.src
}) || songs[currentIndex];
}

// player controls
function nextSong() {
  const nextIndex = (currentIndex + 1) % songs.length;
  playSong(songs[nextIndex]);
  currentIndex = nextIndex;

//   keeping keyboard indicator in sync with array keyls/selected indicator.
  if(document.activeElement.classList.contains('playlist__song')) {
    const songDivs = document.querySelectorAll(".playlist__song");
    songDivs[currentIndex].focus();
  }
}

function previousSong() {
  const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
  playSong(songs[prevIndex]);
  currentIndex = prevIndex;

//   keeping keyboard indicator in sync with array keyls/selected indicator.
  if(document.activeElement.classList.contains('playlist__song')) {
      const songDivs = document.querySelectorAll(".playlist__song");
      songDivs[currentIndex].focus();
    }
}

// playlist display
function clearSongBgs() {
    document.querySelectorAll(".playlist__song").forEach(song => {
        song.removeAttribute('aria-current');
    });
}

function updatePlayingSongBkg(newIndex) {
    const songDivs = document.querySelectorAll(".playlist__song");
    songDivs[newIndex].setAttribute('aria-current', true);
}


function playSelectedSong(song, songDiv) {
    playSong(song);
    clearSongBgs();
    songDiv.setAttribute('aria-current', true);
}


function shuffle() {
    // Shallow copy done with spread operator
    let songsCopy = [...songs];
    // using array sort method and Math.random method
    songsCopy.sort(() => 0.5 - Math.random());
    renderSongs(songsCopy);
    setSongEventListener();
}


// Event listeners
document.querySelector(".play").addEventListener("click", togglePlay);
document.querySelector(".pause").addEventListener("click", pauseSong);
document.querySelector(".previous").addEventListener("click", previousSong);
document.querySelector(".next").addEventListener("click", nextSong);
document.querySelector(".shuffle").addEventListener("click", shuffle);

closeBtn.addEventListener("click", toggleClosePlaylist);


// continue playing next song
audio.addEventListener("ended", nextSong);


// keyboardEvents
window.addEventListener("keydown", (event) => {
    switch (true) {
        case (event.key === "ArrowUp"):
            previousSong();
            break
        case (event.key === "ArrowDown"):
            nextSong();
            break
    }
})


function setSongEventListener(){
  document.querySelectorAll('.playlist__song').forEach((song,index) => {
    song.addEventListener('click', event => playSelectedSong(songs[index], song));
  });
};

setSongEventListener();