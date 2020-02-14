import { ADD_TRACK, DELETE_TRACK, ADD_SEARCH_TRACK, ADD_TRACKS, ADD_POSTS, ADD_POST, DELETE_POST, UPDATE_POST } from './actionTypes';

export const addTrack = (track) => ({type: ADD_TRACK, payload: track})
export const deleteTrack = (track) => ({type: DELETE_TRACK, payload: track})
export const addSearchTrack = (search) => ({type: ADD_SEARCH_TRACK, payload: search})
export const addTracks = (tracks) => ({type: ADD_TRACKS, payload: tracks})

export const appendPosts = (posts) => ({type: ADD_POSTS, payload: posts});
export const appendPost = (post) => ({type: ADD_POST, payload: post});
export const deletePost = (id) => ({type: DELETE_POST, payload: id});
export const updatePost = (post) => ({type: UPDATE_POST, payload: post});

