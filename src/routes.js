import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import News from './containers/News/News';
import Profile from './containers/Profile/Profile';
import Authorization from './containers/Authorization/Authorization';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Logout from './containers/Logout/Logout';
import CRADitem from './components/CRADitem/CARDitem';
import PostAPI from './containers/PostsListWithHooks/PostsListWithHooks';
import PostClass from './containers/PostsListWithClass/PostsListWithClass';
import Products from './containers/Products/Products';
import Cart from './containers/Cart/Cart';

const Routes = (
    <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/news'><News /></Route>
        <ProtectedRoute path='/profile' component={Profile} />
        <Route path='/logout' component={Logout} />
        <Route path='/products' component={Products} />
        <Route path='/cart' component={Cart} />
        <Route path='/postclass' component={PostClass} />
        <Route exact path='/post' component={PostAPI} />
        <Route path='/CRAD/:id' component={CRADitem} />
        <Route path='/login' component={Authorization} />
        <Route path='/register' component={Authorization} />
  </Switch>
)

export default Routes