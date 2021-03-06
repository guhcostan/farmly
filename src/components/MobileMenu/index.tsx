import React from 'react';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';
import {
  Background,
  Menu,
  MenuButton,
  MenuPadding,
  MenuText,
  MenuTitle,
} from './styles';
import { useAuth } from '../../hooks/auth';

interface Props {
  opened: boolean;
  onClickOut: () => void;
}
const MobileMenu: React.FC<Props> = ({ opened, onClickOut }) => {
  const theme = useTheme();
  const history = useHistory();
  const { user, logout } = useAuth();
  return (
    <Background opened={opened} onClick={onClickOut}>
      <Menu opened={opened} onClick={(e) => e.stopPropagation()}>
        <MenuPadding>
          <MenuTitle>Menu</MenuTitle>
          <MenuButton
            onClick={() => {
              if (user) {
                history.push('/newAnnouncement');
              } else {
                history.push('/login');
              }
            }}
          >
            <MenuText>Criar anuncio</MenuText>
          </MenuButton>
          {!user ? (
            <MenuButton
              onClick={() => {
                history.push('/login');
                onClickOut();
              }}
            >
              <MdOutlineAccountCircle size={20} color={theme.colors.black} />
              <MenuText>Fazer login</MenuText>
            </MenuButton>
          ) : (
            <MenuButton
              onClick={() => {
                logout();
                onClickOut();
              }}
            >
              <MdOutlineAccountCircle size={20} color={theme.colors.black} />
              <MenuText>Logout</MenuText>
            </MenuButton>
          )}
        </MenuPadding>
      </Menu>
    </Background>
  );
};

export default MobileMenu;
