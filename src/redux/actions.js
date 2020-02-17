import { ADD_TRACK, DELETE_TRACK, ADD_SEARCH_TRACK, ADD_TRACKS, ADD_POSTS, ADD_POST, DELETE_POST, UPDATE_POST, EDIT_POST_SAGA, ADD_POSTS_SAGA, ADD_POST_SAGA, DELETE_POST_SAGA, ERROR_POST, FETCH_POST } from './actionTypes';

export const addTrack = (track) => ({type: ADD_TRACK, payload: track})
export const deleteTrack = (track) => ({type: DELETE_TRACK, payload: track})
export const addSearchTrack = (search) => ({type: ADD_SEARCH_TRACK, payload: search})
export const addTracks = (tracks) => ({type: ADD_TRACKS, payload: tracks})

export const addPosts = (posts) => ({type: ADD_POSTS, payload: posts});
export const addPost = (post) => ({type: ADD_POST, payload: post});
export const deletePost = (id) => ({type: DELETE_POST, payload: id});
export const updatePost = (post) => ({type: UPDATE_POST, payload: post});
export const errorPost = (message) => ({type: ERROR_POST, payload: message});
export const fetchPost = () => ({type: FETCH_POST})


// for SAGA
export const addPostsSAGA = () => ({type: ADD_POSTS_SAGA});
export const addPostSAGA = (data) => ({type: ADD_POST_SAGA, payload: data})
export const deletePostSAGA = (id) => ({type: DELETE_POST_SAGA, payload: id});
export const editPostSAGA = (post) => ({type: EDIT_POST_SAGA, payload: post});

