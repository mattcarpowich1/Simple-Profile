import React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import compose from 'lodash/fp/compose';
import withRoot from '../withRoot';
import Signup from './signup';
import Profile from './profile';
import style from './App.sass';

const App = () => (
  <div className={style.container}>

    {/* nav component */}
    <nav>
      <div className={style.navInner}>
        <h4>Profile</h4>
      </div>
    </nav>

    <Switch>
      <Route exact path="/" component={Signup} />
      <Route path="/profile" component={Profile} />
    </Switch>

  </div>
);

const hoc = compose([withRoot, withRouter]);

export default hoc(App);
