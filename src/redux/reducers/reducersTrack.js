import { add_track, delete_track, add_tracks} from '../const';

const initialTracks = {
    tracks: ['only U...']
}

const reducerTracks = (state = initialTracks, action) => {
    switch (action.type) {
        case add_track: return { tracks: [...state.tracks, action.payload] };
        case delete_track: return { tracks: state.tracks.filter(track => action.payload.localeCompare(track)) };
        case add_tracks: return {tracks: [...state.tracks, ...action.payload]}
        default: return state
    }
}

export default reducerTracks;