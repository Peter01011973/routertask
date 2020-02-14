import produce from 'immer';
import { ADD_POSTS, ADD_POST, DELETE_POST, UPDATE_POST } from '../actionTypes';

const initialState = {
    posts: []
}

const reducerPosts = produce((draft = initialState, action) => {
    const {type, payload} = action; 
    switch (type) {
        case ADD_POSTS: return {posts: [...payload]};
        case ADD_POST: draft.posts.push(payload); return draft;
        case DELETE_POST: return {posts: draft.posts.filter(post =>(post.id !== payload))};
        case UPDATE_POST: return {posts: draft.posts.map(post =>(post.id === payload.id ? payload : post))};
        default: return draft;
    }
})

export default reducerPosts;