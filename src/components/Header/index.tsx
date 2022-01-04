import React, { useState } from 'react';
import { MdMenu, MdOutlineAccountCircle } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { IoMdSearch } from 'react-icons/all';
import { isMobile } from 'react-device-detect';
import { useHistory } from 'react-router-dom';
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
import { useAuth } from '../../hooks/auth';
import MobileMenu from '../MobileMenu';

const Header: React.FC = () => {
  const theme = useTheme();
  const [mobileOpened, setMobileOpened] = useState(false);
  const history = useHistory();
  const { login, token, user, logout } = useAuth();
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
            {!user ? (
              <HeaderButton
                textMode
                icon={
                  <MdOutlineAccountCircle
                    size={20}
                    color={theme.colors.black}
                  />
                }
                onClick={() => {
                  history.push('/login');
                }}
                text="Entrar"
              />
            ) : (
              <HeaderButton
                textMode
                icon={
                  <MdOutlineAccountCircle
                    size={20}
                    color={theme.colors.black}
                  />
                }
                onClick={() => {
                  logout();
                }}
                text={user?.name.split(' ')[0]}
              />
            )}
            <HeaderButton
              onClick={() => {
                if (user) {
                  history.push('/newAnnouncement');
                } else {
                  history.push('/login');
                }
              }}
              text="Anunciar"
            />
          </HeaderButtonContainer>
        ) : (
          <Button
            textMode
            onClick={() => {
              setMobileOpened(true);
            }}
            icon={<MdMenu size={30} color={theme.colors.black} />}
          />
        )}
      </HeaderContainer>
      <MobileMenu
        opened={mobileOpened}
        onClickOut={() => setMobileOpened(false)}
      />
    </HeaderStickContainer>
  );
};

export default Header;
