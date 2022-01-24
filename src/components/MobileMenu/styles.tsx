import styled from 'styled-components';

interface Prop {
  opened: boolean;
}

export const Background = styled.div<Prop>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(72, 72, 72, 0.5);
  opacity: ${(props) => (props.opened ? '1' : '0')};
  z-index: ${(props) => (props.opened ? '1000' : '-1000')};
  visibility: ${(props) => (props.opened ? 'visible' : 'hidden')};
  transition: z-index 0.2s linear, opacity 0.2s linear, visibility 0.2s;
`;
export const Menu = styled.div<Prop>`
  position: absolute;
  width: ${(props) => (props.opened ? '250px' : '0px')};
  right: 0;
  transition: width 0.2s linear;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
`;
export const MenuPadding = styled.div`
  padding: 20px;
`;
export const MenuButton = styled.div`
  border-bottom: 1px ${(props) => props.theme.colors.black} solid;
  padding: 10px 0;
  display: flex;
  align-items: center;
`;
export const MenuTitle = styled.h2`
  border-bottom: 1px ${(props) => props.theme.colors.black} solid;
  padding: 20px 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const MenuText = styled.div`
  font-weight: bold;
  margin-left: 10px;
`;
