:root {
    /* colors */
    --primary-color: #dfdfe2;
    --secondary-color: #ffffff;
    --app-background-color: #4d4d62;
    --background-color: #1b1b32;
    --foreground-color: #3b3b4f;
    --highlight-color: #f1be32;
  
    /* font sizes */
    --root-font-size: 16px;
    font-size: var(--root-font-size);
  
    /* font-families */
    --font-headline: "Roboto Mono", monospace;
    --font-family: "Lato", sans-serif;
  }
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    background-color: var(--app-background-color);
    color: var(--primary-color);
    font-family: var(--font-family);
  }
  
  h1 {
    font-size: 1.125rem;
    line-height: 1.6;
  }
  
  h2 {
    font-size: var(--root-font-size);
  }
  
  ul {
    margin: 0;
  }
  
  .container {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 5px;
  }
  
  .player,
  .playlist {
    width: 450px;
    background-color: var(--background-color);
    border: 3px solid var(--foreground-color);
  }
  
  .player {
    height: 260px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
  }
  
  .player-bar,
  .playlist-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    width: 100%;
    height: 30px;
    background-color: var(--foreground-color);
  }
  
  .parallel-lines {
    display: flex;
    flex-wrap: wrap;
    row-gap: 6px;
    padding: 0 5px;
  }
  
  .parallel-lines > div {
    height: 2px;
    width: 100%;
    min-width: 75px;
    background-color: var(--highlight-color);
  }
  
  .fcc-title,
  .playlist-title {
    color: var(--secondary-color);
    margin: 0 10px;
    font-family: var(--font-headline);
  }
  
  .player-content {
    display: flex;
    background-color: var(--foreground-color);
    width: 430px;
    height: 200px;
    column-gap: 13px;
    align-items: center;
    justify-content: center;
  }
  
  #player-album-art {
    background-color: var(--secondary-color);
    border: 6px solid var(--background-color);
  }
  
  #player-album-art img {
    width: 150px;
    display: block;
  }
  
  .player-display {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding: 14px;
    background-color: var(--background-color);
    height: 153px;
    width: 226px;
  }
  
  .player-display-song-artist {
    height: 80px;
  }
  
  .player-buttons svg {
    fill: var(--primary-color);
  }
  
  .playing > svg {
    fill: var(--highlight-color);
  }
  
  .player-buttons {
    display: flex;
    justify-content: space-around;
  }
  
  button {
    background: transparent;
    border: none;
    color: var(--primary-color);
    cursor: pointer;
    font-size: var(--root-font-size);
    outline-color: var(--highlight-color);
    text-align: center;
  }
  
  .playlist-song {
    outline-color: var(--highlight-color);
  }
  
  .playlist li:not(:last-child) {
    border-bottom: 1px solid var(--background-color);
  }
  
  button:focus,
  .playlist-song:focus {
    outline-style: dashed;
    outline-width: 2px;
  }
  
  /* Playlist */
  .playlist {
    height: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
  }
  
  #playlist-songs {
    width: 430px;
    height: 100%;
    background-color: var(--foreground-color);
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    padding: 8px 9px;
    visibility: visible;
    justify-content: start;
    list-style: none;
  }
  
  .playlist-song {
    display: flex;
    height: 55px;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
  }
  
  [aria-current="true"] {
    background-color: var(--background-color);
  }
  
  [aria-current="true"] p {
    color: var(--highlight-color);
  }
  
  .playlist-song-info {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    column-gap: 7px;
    padding: 5px 0;
    font-family: var(--font-family);
  }
  
  #player-song-title,
  #player-song-artist {
    margin: 0;
  }
  
  #player-song-artist {
    color: var(--highlight-color);
    font-size: 0.75rem;
  }
  
  #player-song-title {
    font-size: 1.125rem;
  }
  
  .playlist-song-title {
    font-size: 0.85rem;
    width: 241px;
    text-align: left;
  }
  
  .playlist-song-artist {
    font-size: 0.725rem;
    width: 80px;
  }
  
  .playlist-song-duration {
    font-size: 0.725rem;
    margin: auto;
    font-family: var(--font-headline);
    width: 30px;
  }
  
  .playlist-song-delete {
    padding: 0;
    width: 20px;
    height: 20px;
  }
  
  .playlist-song-delete,
  .playlist-song-delete {
    fill: var(--foreground-color);
  }
  
  .playlist-song-delete:hover circle,
  .playlist-song-delete:focus circle {
    fill: #ff0000;
  }
  
  @media (max-width: 700px) {
    .player,
    .playlist {
      width: 300px;
    }
  
    .player {
      height: 340px;
    }
  
    #playlist-songs {
      height: 280px;
      padding: 5px 6px;
      overflow-y: scroll;
      overflow-x: hidden;
      scrollbar-color: var(--background-color) var(--secondary-color);
      scrollbar-width: thin;
    }
  
    #playlist-songs::-webkit-scrollbar {
      width: 5px;
    }
  
    #playlist-songs::-webkit-scrollbar-track {
      background: var(--background-color);
    }
  
    #playlist-songs::-webkit-scrollbar-thumb {
      background: var(--secondary-color);
    }
  
    h1 {
      font-size: 0.813rem;
    }
  
    h2 {
      font-size: 0.75rem;
    }
  
    .player-bar,
    .playlist-bar,
    .player-content,
    #playlist-songs {
      width: 280px;
    }
  
    .playlist-song {
      justify-content: space-between;
    }
  
    .playlist-song-title {
      width: 140px;
    }
  
    .playlist-song-artist {
      width: 40px;
    }
  
    .playlist-song-duration > button {
      padding: 0;
    }
  
    .player-content {
      display: inline;
      position: relative;
      justify-items: center;
      height: 100%;
    }
  
    #player-album-art {
      z-index: -100;
      height: 280px;
      box-shadow: none;
      background: #000;
    }
  
    #player-album-art img {
      width: 100%;
      opacity: 0.6;
    }
  
    .player-display-song-artist {
      padding: 0 10px;
    }
  
    .player-display-song-artist > p {
      white-space: pre-wrap;
    }
  
    .player-display {
      position: absolute;
      width: 100%;
      z-index: 1000;
      background-color: transparent;
      top: 0;
      height: 280px;
      justify-content: space-between;
      text-align: center;
    }
  }