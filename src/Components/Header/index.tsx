import React from 'react';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { useTheme } from 'styled-components';
import {
  HeaderButton,
  HeaderButtonContainer,
  HeaderContainer,
  InputContainer,
} from './styles';
import { FullWidthWrapperColor } from '../../global-styled-components';
import Logo from '../Logo';
import Input from '../Input';

const LoginHeader: React.FC = () => {
  const theme = useTheme();
  return (
    <FullWidthWrapperColor color="white">
      <HeaderContainer>
        <Logo />
        <InputContainer>
          <Input placeholder="Busque aqui" />
        </InputContainer>
        <HeaderButtonContainer>
          <HeaderButton
            textMode
            icon={
              <MdOutlineAccountCircle size={20} color={theme.colors.black} />
            }
            text="Entrar"
          />
          <HeaderButton text="Anunciar" />
        </HeaderButtonContainer>
      </HeaderContainer>
    </FullWidthWrapperColor>
  );
};

export default LoginHeader;
