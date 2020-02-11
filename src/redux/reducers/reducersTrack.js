const initialTracks = {
    tracks: ['only U...']
}

const reducerTracks = (state = initialTracks, action) => {
    switch (action.type) {
        case 'ADD_TRACK': return { tracks: [...state.tracks, action.payload] };
        case 'DELETE_TRACK': return { tracks: state.tracks.filter(track => action.payload.localeCompare(track)) };
        default: return state
    }
}

export default reducerTracks;