import { ADD_TRACK, DELETE_TRACK, ADD_TRACKS} from '../actionTypes';

const initialTracks = {
    tracks: ['only U...']
}

const reducerTracks = (state = initialTracks, action) => {
    switch (action.type) {
        case ADD_TRACK: return { tracks: [...state.tracks, action.payload] };
        case DELETE_TRACK: return { tracks: state.tracks.filter(track => action.payload.localeCompare(track)) };
        case ADD_TRACKS: return {tracks: [...state.tracks, ...action.payload]}
        default: return state
    }
}

export default reducerTracks;