import {ADD_SEARCH_TRACK} from '../actionTypes';

const initialTracks = ''
const searchReducer = (state = initialTracks, action) => {
    switch (action.type) {
        case ADD_SEARCH_TRACK: return action.payload;
        default: return state
    }
}

export default searchReducer;