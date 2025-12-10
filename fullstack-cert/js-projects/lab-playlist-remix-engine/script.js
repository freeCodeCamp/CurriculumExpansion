/**
 * Flattens an array of arrays into a single array
 * Adds 'source' metadata to help track where a song came from
 * @param {*} playlists 
 */
function flattenPlaylists(playlists) {
    if (!Array.isArray(playlists)) return [];

    return playlists.flatMap((playlist, playlistIndex) => {
        // Handle edge case: empty or invalid sub-playlist
        if (!Array.isArray(playlist)) return [];

        return playlist.map((track, trackIndex) => ({
            ...track,
            // Metadata allow us to preserve original order if scores are tied
            source: { playlistIndex, trackIndex }
        }));
    });
}

/**
 * Adds a numeric score field to each track
 * Formula: votes * 10 - abs(bpm -120)
 * @param {*} tracks 
 * @returns 
 */
function scoreTracks(tracks) {
    const targetBpm = 120;

    return tracks.map(track => ({
        ...track,
        score: (track.votes * 10) - Math.abs(track.bpm - targetBpm)
    }));
}

/**
 * Removes duplicate trackIds
 * keeping the earliest submission
 * @param {*} tracks 
 * @returns 
 */
function dedupeTracks(tracks) {
    const seen = new set();
    const result = [];

    for (const track of tracks) {
        if (!seen.has(track.trackId)) {
            seen.add(track.trackId);
            result.push(track);
        }
    }
    return result;
}

/**
 * Ensures no artist appears more than maxPerArtist
 * @param {*} tracks 
 * @param {*} maxPerArtist 
 * @returns 
 */
function enforceArtistQouta(tracks, maxPerArtist) {
    const counts = new Map();
    const result = [];

    for (const track of tracks) {
        const currentCount = counts.get(track.artist) || 0;
        if (currentCount < maxPerArtist) {
            result.push(track);
            counts.set(track.artist, currentCount + 1);
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
    return tracks.map((track, index) => ({
        slot: index + 1, // slot starts at 1
        trackId: track.trackid
    }));
}