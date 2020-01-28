import React, {useState} from 'react';
import './App.css';
import Layout from './HOC/Layout/Layout';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './containers/Home/Home';
import News from './containers/News/News';
import Profile from './containers/Profile/Profile';
import Login from './containers/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import tryAuth from './Services/FBAuthService/FBAuthService';
// TODO useEffect which get localStorage 'token' and setAuth 

function App({location, history}) {
  const [auth, setAuth] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleLogin = authData => {
    let response = null;
    setLoading(true);

    tryAuth(authData).then(
      data =>{
        response = data; 
        setLoading(false);       
        if (response && response.data && response.data.localId) {          
          localStorage.setItem('token', response.data.localId);
          setAuth(true);
        }    
        if (location.state.from) {history.replace(location.state.from)}
      }
    );
    // const reqestData={...authData,returnSecureToken: true}
    // try {
    //   // TODO service for async
    //   const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBqymITIAQwvv51M9pXu0jnJ2gA8ncXnTA', reqestData);
    //   // authData.localId = response.data.localId;
    //   if (response && response.data && response.data.localId) {
    //     localStorage.setItem('token', response.data.localId);
    //     setAuth(true);
    //   }
      
    //   if (location.state.from) {history.replace(location.state.from)}
    // } catch (e) {
    //   // TODO toaster, matireal ui
    //   alert('Everything is bad! Login failed!', e);
    // }
  }
  if (isLoading) {return <h1>Loading</h1>}
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
