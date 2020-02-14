import {createStore, applyMiddleware, combineReducers  } from 'redux';
import reducerPosts from './reducers/reducerPosts';
import reducerTrack from './reducers/reducersTrack';
import searchReducer from './reducers/searchReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({reducerPosts, reducerTrack, searchReducer});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;