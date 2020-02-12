import {add_search_track} from '../const';

const initialTracks = ''
const searchReducer = (state = initialTracks, action) => {
    switch (action.type) {
        case add_search_track: return action.payload;
        default: return state
    }
}

export default searchReducer;