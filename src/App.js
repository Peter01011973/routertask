import React, {useState, useEffect} from 'react';
import './App.css';
import Layout from './HOC/Layout/Layout';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './containers/Home/Home';
import News from './containers/News/News';
import Profile from './containers/Profile/Profile';
import Login from './containers/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Logout from './containers/Logout/Logout';

// TODO useEffect which get localStorage 'token' and setAuth 

function App({history}) {
  const [auth, setAuth] = useState(false);
  // const [firstLaunch, setFirstLaunch] = useState(true);
  useEffect(
    ()=>console.log('I am an effect: ',auth),[auth]
  )

  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(count + 1);
  //     console.log(count);
      
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, [count]);


  useEffect(
    ()=> {
      console.log('I am an effect for tracking localStorage!');
      const token = localStorage.getItem('token');
      if (token) setAuth(true);
      // setFirstLaunch(false)
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

// 1. How to invoke Snakebar in FBAuthService
// 2. How to use Loader in wright way.
// 3. Show Dima for review Logout component.

  return (
    <div className="App">
      <Layout auth={auth}>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/news'><News /></Route>
          <ProtectedRoute path='/profile' component={Profile} auth={auth}/>
          // TODO component method to do in login
          <Route path='/logout' render = {props =><Logout handleLogout={handleLogout} {...props}/>}/>
          <Route path='/login' render = {props =><Login handleLogin={handleLogin} {...props}/>}/>
        </Switch>
      </Layout> 
    </div>
  );
}

export default withRouter(App);
