const theme = {
  maxWidth: 1200,
  colors: {
    primary: '#35462A',
    primaryLight: '#5C7427',
    secondary: '#412E22',
    black: '#0B0C06',
    light: '#D8DCD5',
    white: '#f6f3f3',
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
    };
  }
}

export default theme;
