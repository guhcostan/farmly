import React from 'react';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { useTheme } from 'styled-components';
import {
  HeaderButton,
  HeaderButtonContainer,
  HeaderContainer,
  HeaderStickContainer,
  InputContainer,
} from './styles';
import Logo from '../Logo';
import Input from '../Input';

const Header: React.FC = () => {
  const theme = useTheme();
  return (
    <HeaderStickContainer color="white">
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
    </HeaderStickContainer>
  );
};

export default Header;
