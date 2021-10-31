import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginNavigation from './LoginNavigation';

const NavigationContainer: React.FC = () => {
  return (
    <Router>
      <LoginNavigation />
    </Router>
  );
};

export default NavigationContainer;
