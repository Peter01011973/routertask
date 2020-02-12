import {createStore, applyMiddleware, combineReducers  } from 'redux';
import reducer from './reducers/reducer';
import reducerTrack from './reducers/reducersTrack';
import searchReducer from './reducers/searchReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({reducer, reducerTrack, searchReducer});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;