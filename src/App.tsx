import React, { useState } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import NavigationContainer from './navigations';
import { theme, darkTheme } from './theme';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import HooksProvider from './hooks';
import { useConfig } from './contexts/Configs';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow-x: hidden;
  align-items: center;
  justify-items: center;
  background-color: ${(props) => props.theme.colors.white};
  flex-direction: column;
`;

const App: React.FC = () => {
  const { darkMode } = useConfig();
  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <AppContainer>
        <HooksProvider>
          <NavigationContainer />
        </HooksProvider>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
