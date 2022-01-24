const theme = {
  maxWidth: 1250,
  colors: {
    primary: '#35462A',
    primaryLight: '#5C7427',
    secondary: '#412E22',
    black: '#0B0C06',
    light: '#f5f5f5',
    white: '#ffffff',
  },
};

const darkTheme = {
  maxWidth: 1250,
  colors: {
    primary: '#35462A',
    primaryLight: '#5C7427',
    secondary: '#412E22',
    // black: '#0B0C06',
    black: '#ffffff',
    // light: '#D8DCD5',
    light: '#323432',
    // white: '#ffffff',
    white: '#0B0C06',
  },
};

declare module 'styled-components' {
  export interface DefaultTheme {
    maxWidth: number;

    colors: {
      primary: string;
      primaryLight: string;
      secondary: string;
      black: string;
      white: string;
      light: string;
    };
  }
}

export { theme, darkTheme };
