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
  right: ${(props) => (props.opened ? '0px' : '-250px')};
  transition: right 0.2s linear;
  width: 250px;
  height: 100vh;
  background-color: white;
  padding: 20px;
`;
export const MenuButton = styled.div`
  border-bottom: 1px black;
  display: flex;
  align-items: center;
`;

export const MenuText = styled.div`
  font-weight: bold;
  margin-left: 10px;
`;
