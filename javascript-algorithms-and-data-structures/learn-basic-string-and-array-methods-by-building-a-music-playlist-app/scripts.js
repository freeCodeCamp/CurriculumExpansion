// song playlist
const songListDiv = document.getElementById("playlist__songs");
const songPlaylistDiv = document.querySelector(".playlist");

function renderSongs(songs) {

// map Array Method
// TODO: First Array for steps
const songList = songs.map((song) => {
    return `
    <div class="playlist__song">
        <div class="playlist__song-info">
            <p class="playlist__song-title">${song.title}</p>
            <p class="playlist__song-artist">${song.artist}</p>
        </div>
        <div class="playlist__song-rating">
            <span>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="playlist__song-rate" d="M5.99999 0L7.34708 4.1459H11.7063L8.17962 6.7082L9.52671 10.8541L5.99999 8.2918L2.47328 10.8541L3.82037 6.7082L0.293655 4.1459H4.65291L5.99999 0Z" fill="#F5F6F7"/>
</svg>
            </span>
            <span>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="playlist__song-rate" d="M5.99999 0L7.34708 4.1459H11.7063L8.17962 6.7082L9.52671 10.8541L5.99999 8.2918L2.47328 10.8541L3.82037 6.7082L0.293655 4.1459H4.65291L5.99999 0Z" fill="#F5F6F7"/>
</svg>
            </span>
            <span>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="playlist__song-rate" class="star--rate" d="M5.99999 0L7.34708 4.1459H11.7063L8.17962 6.7082L9.52671 10.8541L5.99999 8.2918L2.47328 10.8541L3.82037 6.7082L0.293655 4.1459H4.65291L5.99999 0Z" fill="#F5F6F7"/>
</svg>
            </span>
            <span >
            <svg  width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="playlist__song-rate" d="M5.99999 0L7.34708 4.1459H11.7063L8.17962 6.7082L9.52671 10.8541L5.99999 8.2918L2.47328 10.8541L3.82037 6.7082L0.293655 4.1459H4.65291L5.99999 0Z" fill="#F5F6F7"/>
</svg>
            </span>
            <span>
            <svg  width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="playlist__song-rate" d="M5.99999 0L7.34708 4.1459H11.7063L8.17962 6.7082L9.52671 10.8541L5.99999 8.2918L2.47328 10.8541L3.82037 6.7082L0.293655 4.1459H4.65291L5.99999 0Z" fill="#F5F6F7"/>
</svg>
            </span>
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

// SONG-RATING - forEach Array Method

// document.querySelectorAll(".playlist__song-rate").forEach((star) => {
//     star.addEventListener("click", function () {
//         star.classList.toggle('rated');
//     });
// });


document.querySelectorAll(".playlist__song-rating").forEach((starDiv) => {
    let starIndex = 0;
    const starList = starDiv.querySelectorAll(".playlist__song-rate");
    starList.forEach((star) => {
        star.addEventListener("click",() => {
            if(!star.classList.contains("rated")) {
                if(!starList[starIndex].classList.contains("rated") ) {
                    starList[starIndex].classList.add("rated");
                    ++starIndex
                }
            } else if (star.classList.contains("rated")) {
                --starIndex;
                starList[starIndex].classList.remove("rated");
            }
        })
    })
})


// audio API
const audio = new Audio();

let currentIndex = 0;
updatePlayingSongBkg(currentIndex);

const playPausebtn = document.querySelector(".play");

function playSong(song) {
    const oldIndex = currentIndex;
    // using indesof method
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
        songListDiv.style. visibility = "visible";
        songListDiv.style. display = "flex";

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
    document.querySelectorAll('.playlist__song').forEach(song => {
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

    songDiv.parentNode.classList.add('selected');
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
document.querySelector(".rewind").addEventListener("click", previousSong);
document.querySelector(".forward").addEventListener("click", nextSong);
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
            togglePlayPause();
            break
    }
})

// forEach method
document.querySelectorAll(".playlist__song-info").forEach((songDiv, index) => {
  songDiv.addEventListener("click", () => playSelectedSong(songs[index], songDiv));
});




