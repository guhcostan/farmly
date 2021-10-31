import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Header from '../Components/Header';

const LoginNavigation: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default LoginNavigation;
