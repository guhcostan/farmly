import React from 'react';
import { useTheme } from 'styled-components';
import { FullWidthWrapperColor } from '../../global-styled-components';
import { Container } from './styles';

const Banner: React.FC = () => {
  const theme = useTheme();
  return (
    <FullWidthWrapperColor
      color={theme.colors.primary}
      image="/assets/gado.jpeg"
    >
      <Container>
        <h1>O maior site de comercio bovino</h1>
      </Container>
    </FullWidthWrapperColor>
  );
};

export default Banner;
