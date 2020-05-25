import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CodeChallenges from '../CodeChallenges/CodeChallenges.jsx';
import Challenge from '../../containers/Challenge.jsx';
import Auth from '../Auth/Auth.jsx';
import Header from '../Header/Header';
import SignUp from '../Auth/SignUp.jsx';
import Login from '../Auth/Login.jsx';
// import PrivateRoute from '../Auth/PrivateRoute.jsx';

export default function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Route path={/^(?!.*(\/splash)).*$/} component={Header} /> 
      <Switch>
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/challenges' component={CodeChallenges} />
        <Route exact path='/challenges/:id' component={Challenge} />
        {/* <PrivateRoute exact path='/challenges' component={CodeChallenges} />
        <PrivateRoute exact path='/challenges/:id' component={Challenge} /> */}
      </Switch>
    </Router>
  );
}
