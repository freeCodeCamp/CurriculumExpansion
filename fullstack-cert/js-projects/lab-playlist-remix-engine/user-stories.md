1. You should accept an array of playlists where each playlist is an array of `{ trackId, artist, title, votes, bpm }`.
2. You should create `flattenPlaylists(playlists)` using `flatMap` to produce a single track list annotated with source metadata.
3. You should create `scoreTracks(tracks)` that adds a score field derived from votes and BPM closeness to a target.
4. You should create `dedupeTracks(tracks)` that keeps the earliest submission of each trackId.
5. You should create `enforceArtistQuota(tracks, maxPerArtist)` that removes or reorders tracks exceeding the quota.
6. You should create `buildSchedule(tracks)` that outputs an array of { slot, trackId } objects ready for broadcast.