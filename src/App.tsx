import React from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import NavigationContainer from './navigations';
import theme from './theme';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import HooksProvider from './hooks';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow-x: hidden;
  align-items: center;
  justify-items: center;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <HooksProvider>
          <NavigationContainer />
        </HooksProvider>
      </ThemeProvider>
    </AppContainer>
  );
};

export default App;
