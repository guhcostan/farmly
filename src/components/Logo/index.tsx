import React from 'react';
import { useHistory } from 'react-router-dom';
import { LogoContainer, LogoText, LogoTextBold } from './styles';

const Logo: React.FC = () => {
  const history = useHistory();
  return (
    <LogoContainer onClick={() => history.push('/')}>
      <LogoTextBold>Farm</LogoTextBold>
      <LogoText>ly</LogoText>
    </LogoContainer>
  );
};

export default Logo;
