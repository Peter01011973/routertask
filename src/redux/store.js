import {createStore, applyMiddleware, combineReducers  } from 'redux';
import reducer from '../redux/reducers/reducer';
import reducerTrack from '../redux/reducers/reducersTrack';
import searchReducer from '../redux/reducers/searchReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({reducer, reducerTrack, searchReducer});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;