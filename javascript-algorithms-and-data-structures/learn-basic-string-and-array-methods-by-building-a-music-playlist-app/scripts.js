
//  Song array creation

const songs = [
    { title: "Scratching The Surface", cover: "https://cdn.freecodecamp.org/MP3%20Player%20Project/Quincy%20Larson%20Album%20Art.jpg",artist: "Quincy Larson", duration: "4:25", src:"https://cdn.freecodecamp.org/MP3%20Player%20Project/Scratching%20The%20Surface.mp3"},
    { title: "Can't Stay Down", cover: "https://cdn.freecodecamp.org/MP3%20Player%20Project/Quincy%20Larson%20Album%20Art.jpg", artist: "Quincy Larson", duration: "4:15" , src:"https://cdn.freecodecamp.org/MP3%20Player%20Project/Can't%20Stay%20Down.mp3"},
    { title: "Still Learning", cover: "https://cdn.freecodecamp.org/MP3%20Player%20Project/Quincy%20Larson%20Album%20Art.jpg", artist: "Quincy Larson", duration: "3:51" , src:"https://cdn.freecodecamp.org/MP3%20Player%20Project/Still%20Learning.mp3"},
    { title: "Cruising for a Musing", cover: "https://cdn.freecodecamp.org/MP3%20Player%20Project/Quincy%20Larson%20Album%20Art.jpg", artist: "Quincy Larson", duration: "3:34" , src:"https://cdn.freecodecamp.org/MP3%20Player%20Project/Cruising%20for%20a%20Musing.mp3"},
    { title: "Never Not Favored", cover: "https://cdn.freecodecamp.org/MP3%20Player%20Project/Quincy%20Larson%20Album%20Art.jpg", artist: "Quincy Larson", duration: "3:35" , src:"https://cdn.freecodecamp.org/MP3%20Player%20Project/Never%20Not%20Favored.mp3"},
    { title: "From the Ground Up", cover: "https://cdn.freecodecamp.org/MP3%20Player%20Project/Quincy%20Larson%20Album%20Art.jpg", artist: "Quincy Larson", duration: "3:12" , src:"https://cdn.freecodecamp.org/MP3%20Player%20Project/From%20the%20Ground%20Up.mp3"},
    { title: "Walking on Air", cover: "https://cdn.freecodecamp.org/MP3%20Player%20Project/Quincy%20Larson%20Album%20Art.jpg", artist: "Quincy Larson", duration: "3:25" , src:"https://cdn.freecodecamp.org/MP3%20Player%20Project/Walking%20on%20Air.mp3"},
    { title: "Can't Stop Me. Can't Even Slow Me Down.", cover: "https://cdn.freecodecamp.org/MP3%20Player%20Project/Quincy%20Larson%20Album%20Art.jpg", artist: "Quincy Larson", duration: "3:52" , src:"https://cdn.freecodecamp.org/MP3%20Player%20Project/Can't%20Stop%20Me.%20Can't%20Even%20Slow%20Me%20Down.mp3"},
    { title: "The Surest Way Out is Through", cover: "https://cdn.freecodecamp.org/MP3%20Player%20Project/Quincy%20Larson%20Album%20Art.jpg", artist: "Quincy Larson", duration: "3:10" , src:"https://cdn.freecodecamp.org/MP3%20Player%20Project/The%20Surest%20Way%20Out%20is%20Through.mp3"},
    { title: "Chasing That Feeling", cover: "https://cdn.freecodecamp.org/MP3%20Player%20Project/Quincy%20Larson%20Album%20Art.jpg", artist: "Quincy Larson", duration: "2:43" , src:"https://cdn.freecodecamp.org/MP3%20Player%20Project/Chasing%20That%20Feeling.mp3"},
  ];

  // song playlist
const songListDiv = document.getElementById("playlist__songs");
const songPlaylistDiv = document.querySelector(".playlist");

function renderSongs(songs) {

// map Array Method
// TODO: First Array for steps
const songList = songs.map((song) => {
    return `
    <div class="playlist__song" role="button" tabindex="0">
        <div class="playlist__song-info">
            <p class="playlist__song-title">${song.title}</p>
            <p class="playlist__song-artist">${song.artist}</p>
        </div>
        <div class="playlist__song-rating">

        </div>
        <div class="playlist__song-duration">
            <p>${song.duration}</p>
        </div>
    </div>
    `;
    }).join('');

    songListDiv.innerHTML = songList;
}

renderSongs(songs);


// audio API
const audio = new Audio();

let currentIndex = 0;
updatePlayingSongBkg(currentIndex);

const playPausebtn = document.querySelector(".play");

function playSong(song) {
    const oldIndex = currentIndex;
    // using indesOf method
    const newIndex = songs.indexOf(song);

    playPausebtn.innerHTML = '<img src="assets/pause.svg" alt="pause button" />'

    if (oldIndex !== newIndex) {
        clearSongBgs();
        updatePlayingSongBkg(newIndex)
    }

    audio.src = song.src;
    document.getElementById("player__song-title").innerText = song.title;
    document.getElementById("player__song-artist").innerText = song.artist;
    document.getElementById("player__album-art").innerHTML = `<img src="${song.cover}" alt="song cover art" />`;
    audio.play();
    currentIndex = newIndex;

    updatePlayingSongBkg(newIndex);

}

function pauseSong() {
  audio.pause();
  playPausebtn.innerHTML = '<img src="assets/play.svg" alt="play button" />'
}

function togglePlayPause() {
  if (audio.paused) {
    playSong(songs[currentIndex]);
  } else {
    pauseSong();
  }

  updatePlayingSongBkg(currentIndex)

}

function toggleClosePlaylist() {
    if (songListDiv.style.visibility == "hidden") {
        songListDiv.style.visibility = "visible";
        songListDiv.style.display = "flex";

    } else {
        songListDiv.style.visibility = "hidden";
        songListDiv.style.display = "none";
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
}

function previousSong() {
  const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
  playSong(songs[prevIndex]);
  currentIndex = prevIndex;
}

// playlist display
function clearSongBgs() {
    document.querySelectorAll(".playlist__song").forEach(song => {
        song.classList.remove('selected');
    });
}

function updatePlayingSongBkg(newIndex) {
    const songDivs = document.querySelectorAll(".playlist__song");
    songDivs[newIndex].classList.add('selected');
}


function playSelectedSong(song, songDiv) {
    playSong(song);
    clearSongBgs();

    songDiv.classList.add('selected');
}


function shuffle() {
    // Shallow copy done with spread operator
    let songsCopy = [...songs];
    // using array sort method and Math.random method
    songsCopy.sort(() => 0.5 - Math.random());
    renderSongs(songsCopy);
    playSong(songsCopy[currentIndex])
}

// Event listeners
document.querySelector(".play").addEventListener("click", togglePlayPause);
document.querySelector(".previous").addEventListener("click", previousSong);
document.querySelector(".next").addEventListener("click", nextSong);
document.querySelector(".shuffle").addEventListener("click", shuffle);


document.querySelector(".playlist__close").addEventListener("click", toggleClosePlaylist);


// continue playing next song
audio.addEventListener("ended", nextSong);


// keyboardEvents
window.addEventListener("keydown", (event) => {
//     if (event.key === "ArrowUp") {
//         previousSong();
//     } else if (event.key === "ArrowDown") {
//         nextSong();
//     } else if (event.key == " ") {
//        togglePlayPause();
//    }

    switch (true) {
        case (event.key === "ArrowUp"):
            previousSong();
            break
        case (event.key === "ArrowDown"):
            nextSong();
            break
        case (event.key === " "):
            event.preventDefault();
            togglePlayPause();
            break
    }
})


document.querySelectorAll('div[role="button"]').forEach((songDiv,index) => {
    songDiv.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            playSelectedSong(songs[index], songDiv);
        }
    });
});


