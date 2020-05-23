import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CodeChallenges from '../CodeChallenges/CodeChallenges.jsx';
import Challenge from '../../containers/Challenge.jsx';
import Auth from '../Auth/Auth.jsx';
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/challenges' component={CodeChallenges} />
        <Route exact path='/challenges/:id' component={Challenge} />
      </Switch>
    </Router>
  );
}
