import React from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import NavigationContainer from './navigations';
import theme from './theme';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <NavigationContainer />
      </ThemeProvider>
    </AppContainer>
  );
};

export default App;
