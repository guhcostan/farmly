import React, { useState } from 'react';

import Switch from 'react-switch';
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
import { useConfig } from '../../contexts/Configs';

const Header: React.FC = () => {
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { darkMode, toggleDarkMode } = useConfig();
  const [mobileOpened, setMobileOpened] = useState(false);
  const history = useHistory();
  const { login, token, user, logout } = useAuth();
  return (
    <HeaderStickContainer color={theme.colors.white}>
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
                bold={false}
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
                bold={false}
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
        <Switch onChange={toggleDarkMode} checked={darkMode} />
      </HeaderContainer>
      {isMobile && (
        <MobileMenu
          opened={mobileOpened}
          onClickOut={() => setMobileOpened(false)}
        />
      )}
    </HeaderStickContainer>
  );
};

export default Header;
