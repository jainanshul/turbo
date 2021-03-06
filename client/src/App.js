import React, {Component} from 'react';
import {
  Switch,
  BrowserRouter,
  Route,
} from 'react-router-dom';

import Home from './Home';
import Authenticator from './Authenticator';
import Register from './Register';
import PrivateRoute from './PrivateRoute';
import Page404 from './Page404';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Authenticator} />
          <Route path='/register' component={Register} />
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute path='/home' component={Home} />
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
    );
  }
}
