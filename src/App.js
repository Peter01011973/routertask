import React, {useState, useEffect} from 'react';
import './App.css';
import Layout from './HOC/Layout/Layout';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './containers/Home/Home';
import News from './containers/News/News';
import Profile from './containers/Profile/Profile';
import Authorization from './containers/Authorization/Authorization';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Logout from './containers/Logout/Logout';

function App({history}) {
  const [auth, setAuth] = useState(null);

  useEffect(
    ()=> {
      history.replace('/');
      const email = localStorage.getItem('email');
      const token = localStorage.getItem('token');
      if (token) setAuth(email);
    }, [history]
  )

  const handleLogin = (email) => {
    setAuth(email);
  }

  const handleLogout = () => {
    localStorage.clear();
    setAuth(null);
    history.push('/');
  }

  return (
    <div className="App">
      <Layout auth={auth}>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/news'><News /></Route>
          <ProtectedRoute path='/profile' component={Profile} auth={auth}/>
          <Route path='/logout' render = {props =><Logout handleLogout={handleLogout} {...props}/>}/>
          <Route path='/login' render = {props =><Authorization handleLogin={handleLogin} {...props}/>}/>
          <Route path='/register' render = {props =><Authorization handleLogin={handleLogin} {...props}/>}/>
        </Switch>
      </Layout> 
    </div>
  );
}

export default withRouter(App);


// 1. How to prevent autocomplite in input form
// 2. How to use github in proper way