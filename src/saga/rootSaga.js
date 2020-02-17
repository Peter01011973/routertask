import {put, takeLatest, call} from 'redux-saga/effects';
import { getAllPostsAPI, addPostAPI, deletePostAPI, editPostAPI } from '../services/PostAPIService/PostAPIService';
import {addPosts, updatePost, deletePost, addPost, errorPost, fetchPost} from '../redux/actions';
import { ADD_POSTS_SAGA, ADD_POST_SAGA, DELETE_POST_SAGA, EDIT_POST_SAGA } from '../redux/actionTypes';

export function* fetchPostAsync() {  
    yield put(fetchPost())
    const result = yield call(getAllPostsAPI);
    const {response, success, message} = result;
    if (success) { yield put(addPosts(response.data)) }
    else { yield put(errorPost(message)) }
}

export function* addPostSAGAAsync(action) {
    yield put(fetchPost())
    const result = yield call(addPostAPI.bind(null,action.payload));
    const { response, success, message } = result;
    if (success) { yield put(addPost(response.data)); }
    else { yield put(errorPost(message)) }
}

export function* deletePostSAGAAsync(action) {    
    yield put(fetchPost())
    const result = yield call(deletePostAPI.bind(null,action.payload));
    const { response, success, message } = result;
    if (success) { yield put(deletePost(+response.config.url.match(/\/([0-9]+)\/?$/)[1])); }
    else { yield put(errorPost(message)) }
}

export function* editPostSAGAAsync(action) {
    yield put(fetchPost())
    const result = yield call(editPostAPI.bind(null,action.payload));
    const { response, success, message } = result;
    if (success) { yield put(updatePost(response.data)); }
    else { yield put(errorPost(message)) }
}

export default function* rootSaga() {
    yield takeLatest(ADD_POSTS_SAGA, fetchPostAsync);
    yield takeLatest(ADD_POST_SAGA, addPostSAGAAsync);
    yield takeLatest(DELETE_POST_SAGA, deletePostSAGAAsync);
    yield takeLatest(EDIT_POST_SAGA, editPostSAGAAsync);
  }