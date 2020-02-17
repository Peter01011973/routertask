import {createStore, applyMiddleware, combineReducers  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducerPosts from './reducers/reducerPosts';
import reducerTrack from './reducers/reducersTrack';
import searchReducer from './reducers/searchReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({reducerPosts, reducerTrack, searchReducer});

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export default store;