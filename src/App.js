import React from 'react';
import './App.css';
import Layout from './HOC/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import News from './containers/News/News';
import Profile from './containers/Profile/Profile';
import Login from './containers/Login/Login';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/news'><News /></Route>
          <Route path='/profile'><Profile /></Route>
          <Route path='/login'><Login /></Route>
        </Switch>
      </Layout> 
    </div>
  );
}

export default App;
