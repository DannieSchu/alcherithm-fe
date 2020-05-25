import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CodeChallenges from '../CodeChallenges/CodeChallenges.jsx';
import Challenge from '../../containers/Challenge.jsx';
import Results from '../../containers/Results/Results.jsx';
import Auth from '../Auth/Auth.jsx';
import Header from '../Header/Header';
import Splash from '../Splash/Splash.jsx';
// import PrivateRoute from '../Auth/PrivateRoute.jsx';

export default function App() {
  return (
    <Router>
      <Route path={/^(?!.*(\/splash)).*$/} component={Header} />
      <Switch>
        <Route exact path='/splash' component={Splash} />
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/challenges' component={CodeChallenges} />
        <Route exact path='/challenges/:id' component={Challenge} />
        <Route exact path='/results' component={Results} />
        {/* <PrivateRoute exact path='/challenges' component={CodeChallenges} />
        <PrivateRoute exact path='/challenges/:id' component={Challenge} /> */}
      </Switch>
    </Router>
  );
}
