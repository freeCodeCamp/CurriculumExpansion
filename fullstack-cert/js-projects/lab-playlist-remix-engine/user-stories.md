# Playlist Remix Engine
In this project, you will build a program that creates a single remix playlist from multiple playlists submitted by listeners.

Each listener provides a list of songs they want to hear. Some songs may appear more than once, and some artists may show up too many times. Your job is to work through these playlists step by step: combine them into one list, score each song, remove duplicate songs, limit how often the same artist appears, and then create a final play order.


1. You should accept an array of playlists where each playlist is an array of `{ trackId, artist, title, votes, bpm }`.

2. You should create `flattenPlaylists(playlists)` that converts multiple playlists into a single list of tracks annotated with source metadata indicating where each track originated.

3. You should create `scoreTracks(tracks)` that adds a score field derived from votes and BPM closeness to a target.

4. You should create `dedupeTracks(tracks)` that keeps the earliest submission of each trackId.

5. You should create `enforceArtistQuota(tracks, maxPerArtist)` that removes or reorders tracks exceeding the quota.

6. You should create `buildSchedule(tracks)` that outputs an array of `{ slot, trackId }` objects ready for broadcast.

7. You should create `remixPlaylist(playlists, maxPerArtist)` that turns the original playlists into a final remix schedule. Use the functions you built earlier to complete this process.