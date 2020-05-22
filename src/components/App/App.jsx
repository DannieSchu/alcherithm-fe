import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Challenge from '../../containers/Challenge.jsx';
import CodeChallenges from '../CodeChallenges/CodeChallenges.jsx';
// import Auth from '../Auth/Auth.jsx';
import Challenge from '../../containers/Challenge.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/challenges/:id' component={Challenge} />
        <Router exact path='/challenges' component={CodeChallenges} />
        {/* <CodeChallenges /> */}
      </Switch>
    </Router>
  );
}
