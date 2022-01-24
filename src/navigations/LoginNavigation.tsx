import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../screens/Home';
import Header from '../components/Header';
import AnnouncementsInfo from '../screens/AnnouncementsInfo';
import Login from '../screens/Login';
import AnnouncementCreate from '../screens/AnnouncementCreate';
import FarmCreate from '../screens/FarmCreate';
import Checkout from '../screens/Checkout';

const LoginNavigation: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/announcement/:id" exact>
          <AnnouncementsInfo />
        </Route>
        <Route path="/newAnnouncement" exact>
          <AnnouncementCreate />
        </Route>
        <Route path="/newFarm" exact>
          <FarmCreate />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default LoginNavigation;
