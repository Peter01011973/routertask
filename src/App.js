import React, {useContext, useEffect} from 'react';
import './App.css';
import Layout from './HOC/Layout/Layout';
import { withRouter } from 'react-router-dom';
import Routes from './routes';
import {CurrentUserContext} from './HOC/context/CurrentUser';

function App() {
  const [, setCurrentUserState] = useContext(CurrentUserContext);

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
      <Layout>
        {Routes}
      </Layout>
    </div>
  );
}

export default withRouter(App);