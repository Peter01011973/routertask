import React, {useContext, useEffect, createContext, useReducer} from 'react';
import './App.css';
import Layout from './HOC/Layout/Layout';
import { withRouter } from 'react-router-dom';
import Routes from './routes';
import {CurrentUserContext} from './HOC/context/CurrentUser';

export const myContext = createContext('water');

export const thingReducer = (state, action) => {
  const {type} = action;
  switch (type) {
      case 'PREPARE_TEA': return 'tea';
      case 'PREPARE_COFFEE': return 'coffee';
      default: return state;
  }
}

function App() {

  const [, setCurrentUserState] = useContext(CurrentUserContext);
  const [thing, dispatch] = useReducer(thingReducer, 'water');

  useEffect(
    ()=> {
      const email = localStorage.getItem('email');
      const token = localStorage.getItem('token');
      if (token) setCurrentUserState(email);
    }
    ,[setCurrentUserState])

  // if (location.pathname.indexOf('bad')) {
  //   return <Redirect to = '/'/>;
  // }

  return (
    <div className="App">
      <myContext.Provider value={{thing, dispatch}}>
        <Layout>
          {Routes}
        </Layout>
      </myContext.Provider>
    </div>
  );
}

export default withRouter(App);