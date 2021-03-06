import React, {useState, useEffect} from 'react';
import './App.css';
import Layout from './HOC/Layout/Layout';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './containers/Home/Home';
import News from './containers/News/News';
import Profile from './containers/Profile/Profile';
import Login from './containers/Login/Login';
import Login2 from './containers/Login2/Login2';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Logout from './containers/Logout/Logout'; 

function App({history}) {
  const [auth, setAuth] = useState(false);
  useEffect(
    ()=>console.log('I am an effect: ',auth),[auth]
  )

  useEffect(
    ()=> {
      console.log('I am an effect for tracking localStorage!');
      const token = localStorage.getItem('token');
      if (token) setAuth(true);
    }, []
  )

  const handleLogin = () => {
    setAuth(true);
  }

  const handleLogout = () => {
    localStorage.clear();
    setAuth(false);
    history.push('/');
  }

  return (
    <div className="App">
      <Layout auth={auth}>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/news'><News /></Route>
          <ProtectedRoute path='/profile' component={Profile} auth={auth}/>
          {/* <Route path='/login2' component={Login2}/> */}
          // TODO component method to do in login
          <Route path='/logout' render = {props =><Logout handleLogout={handleLogout} {...props}/>}/>
          <Route path='/login' render = {props =><Login handleLogin={handleLogin} {...props}/>}/>
        </Switch>
      </Layout> 
    </div>
  );
}

export default withRouter(App);
