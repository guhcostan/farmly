import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../screens/Home';
import LoginHeader from '../Components/LoginHeader';

const LoginNavigation: React.FC = () => {
  return (
    <>
      <LoginHeader />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default LoginNavigation;
