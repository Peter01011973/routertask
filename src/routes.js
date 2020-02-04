import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import News from './containers/News/News';
import Profile from './containers/Profile/Profile';
import Authorization from './containers/Authorization/Authorization';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Logout from './containers/Logout/Logout';
import CRAD from './containers/CRAD/CRAD';
import CRADitem from './components/CRADitem/CARDitem';
import AddItem from './components/AddItem/AddItem';

const Routes = (
    <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/news'><News /></Route>
        <ProtectedRoute path='/profile' component={Profile} />
        <Route path='/logout' component={Logout} />
        <Route exact path='/CRAD' component={CRAD} />
        <Route exact path='/CRAD/add' component={AddItem} />
        <Route path='/CRAD/:id' component={CRADitem} />
        <Route path='/login' component={Authorization} />
        <Route path='/register' component={Authorization} />
  </Switch>
)

export default Routes