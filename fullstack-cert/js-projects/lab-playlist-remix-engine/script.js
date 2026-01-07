/**
 * Flattens an array of arrays into a single array
 * Adds 'source' metadata to help track where a song came from
 * @param {*} playlists 
 */
function flattenPlaylists(playlists) {
    if (!Array.isArray(playlists)) return [];

    const result = [];

    for (let i = 0; i < playlists.length; i++) {
        const playlist = playlists[i];
        if (!Array.isArray(playlist)) continue;

        for (let j = 0; j < playlist.length; j++) {
            const track = playlist[j];
            result.push ({
                trackId: track.trackId,
                artist: track.artist,
                title: track.title,
                votes: track.votes,
                bpm: track.bpm,
                source: [i, j]
            });
        }
    }
    return result;
}

/**
 * Adds a numeric score field to each track
 * Formula: votes * 10 - abs(bpm -120)
 * @param {*} tracks 
 * @returns 
 */
function scoreTracks(tracks) {
    const targetBpm = 120;
    const result = []
    
    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i]

        result.push({
            trackId: track.trackId,
            artist: track.artist,
            title: track.title,
            votes: track.votes,
            bpm: track.bpm,
            source: track.source,
            score: (track.votes * 10) - Math.abs(track.bpm - targetBpm)
        })
    }
    return result;
}

/**
 * Removes duplicate trackIds
 * keeping the earliest submission
 * @param {*} tracks 
 * @returns 
 */
function dedupeTracks(tracks) {
    const seenTrackIds = [];
    const result = [];

    for (let i = 0; i < tracks.length; i++) {
        if (!seenTrackIds.includes(tracks[i].trackId)) {
            seenTrackIds.push(tracks[i].trackId);
            result.push(tracks[i]);
        }
    }
    return result;
}

/**
 * Ensures no artist appears more than maxPerArtist
 *  - Removes tracks beyond the quota
 *  - Uses parrallel arrays to track counts
 * @param {*} tracks 
 * @param {*} maxPerArtist 
 * @returns 
 */
function enforceArtistQuota(tracks, maxPerArtist) {
    const artists = [];
    const artistCounts = [];
    const result = [];

    for (let i = 0; i < tracks.length; i++) {
        const artist = tracks[i].artist;
        const artistIndex = artists.indexOf(artist);

        if (artistIndex === -1) {
            artists.push(artist);
            artistCounts.push(1);
            result.push(tracks[i]);
        } else if (artistCounts[artistIndex] <  maxPerArtist) {
            artistCounts[artistIndex]++;
            result.push(tracks[i]);
        }
    }  

    return result
} 

/**
 * Converts a track list into broadcast-ready slots
 * @param {*} tracks 
 * @returns 
 */
function buildSchedule(tracks) {
    const schedule = [];

    for (let i = 0; i < tracks.length; i++) {
        schedule.push({
            slot: i + 1, // slot starts at 1
            trackId: tracks[i].trackId
        });
    }

    return schedule
}

/**
 * Use all helper functions to produce a final schedule.
 * @param {*} playlists 
 * @param {*} maxPerArtist 
 * @returns 
 */
function remixPlaylist(playlists, maxPerArtist) {
    const flattened = flattenPlaylists(playlists);
    const scored = scoreTracks(flattened)
    const deduped = dedupeTracks(scored);
    const limited = enforceArtistQuota(deduped, maxPerArtist)
    return buildSchedule(limited)
}