import React from 'react';
import { MdMenu, MdOutlineAccountCircle } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { IoMdSearch } from 'react-icons/all';
import { isMobile } from 'react-device-detect';
import {
  HeaderButton,
  HeaderButtonContainer,
  HeaderContainer,
  HeaderStickContainer,
  InputContainer,
} from './styles';
import Logo from '../Logo';
import Input from '../Input';
import Button from '../Button';

const Header: React.FC = () => {
  const theme = useTheme();
  return (
    <HeaderStickContainer color="white">
      <HeaderContainer>
        <Logo />
        <InputContainer>
          <Input
            placeholder="Busque aqui"
            button={<IoMdSearch style={{ display: 'flex' }} size={20} />}
          />
        </InputContainer>
        {!isMobile ? (
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
        ) : (
          <Button
            textMode
            icon={<MdMenu size={30} color={theme.colors.black} />}
          />
        )}
      </HeaderContainer>
    </HeaderStickContainer>
  );
};

export default Header;
