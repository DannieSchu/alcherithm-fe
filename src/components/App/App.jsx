import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import SignUp from '../Auth/SignUp.jsx';
import Login from '../Auth/Login.jsx';
import About from '../About/About.jsx';
import CodeChallenges from '../CodeChallenges/CodeChallenges.jsx';
import Challenge from '../../containers/Challenge.jsx';
import History from '../History/History.jsx';
import Splash from '../Splash/Splash.jsx';
import Results from '../Results/Results.jsx';
import { AuthProvider } from '../../hooks/AuthProvider.jsx';
import PrivateRoute from '../Auth/PrivateRoute.jsx';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Route path={/^(?!.*(\/splash)).*$/} component={Header} />
        <Switch>
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/about' component={About} />
          <Route exact path='/splash' component={Splash} />
          <PrivateRoute exact path='/' component={Dashboard} />
          <PrivateRoute exact path='/challenges' component={CodeChallenges} />
          <PrivateRoute exact path='/challenges/:id' component={Challenge} />
          <PrivateRoute exact path='/results/solution/:id' component={Results} />
          <PrivateRoute exact path='/history' component={History} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
