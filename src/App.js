import React, {useState} from 'react';
import './App.css';
import Layout from './HOC/Layout/Layout';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './containers/Home/Home';
import News from './containers/News/News';
import Profile from './containers/Profile/Profile';
import Login from './containers/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

// TODO useEffect which get localStorage 'token' and setAuth 

function App({location, history}) {
  const [auth, setAuth] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleLogin = authData => {
    setAuth(true);
  }

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/news'><News /></Route>
          <ProtectedRoute path='/profile' component={Profile} auth={auth}/>
          // TODO component method to do in login
          <Route path='/login' render = {props =><Login handleLogin={handleLogin} {...props}/>}/>
        </Switch>
      </Layout> 
    </div>
  );
}

export default withRouter(App);
