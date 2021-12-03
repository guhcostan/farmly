import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Header from '../components/Header';
import AnnouncementsInfo from '../screens/AnnouncementsInfo';
import Login from '../screens/Login';

const LoginNavigation: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/announcement/:id">
          <AnnouncementsInfo />
        </Route>
      </Switch>
    </>
  );
};

export default LoginNavigation;
