import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import News from './containers/News/News';
import Profile from './containers/Profile/Profile';
import Authorization from './containers/Authorization/Authorization';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Logout from './containers/Logout/Logout';

const Routes = (
    <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/news'><News /></Route>
        <ProtectedRoute path='/profile' component={Profile} />
        <Route path='/logout' component={Logout} />} />
        <Route path='/login' component={Authorization} />} />
        <Route path='/register' component={Authorization} />} />
  </Switch>
)

export default Routes