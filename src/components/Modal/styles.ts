import styled from 'styled-components';

interface Prop {
  opened: boolean;
}

export const BackgroundModal = styled.div<Prop>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(72, 72, 72, 0.5);
  opacity: ${(props) => (props.opened ? '1' : '0')};
  z-index: ${(props) => (props.opened ? '1000' : '-1000')};
  visibility: ${(props) => (props.opened ? 'visible' : 'hidden')};
  transition: z-index 0.2s linear, opacity 0.2s linear, visibility 0.2s;
  overflow: hidden;
`;
export const ModalStyled = styled.div<Prop>`
  position: absolute;
  padding: 20px;
  border-radius: 12px;
  bottom: ${(props) => (props.opened ? '50%' : '-500px')};
  left: 50%;
  transform: translate(-50%, 50%);
  transition: bottom 0.2s linear;
  width: 400px;
  background-color: white;
`;
