import React from 'react';
import { BackgroundModal, ModalStyled } from './styles';

export interface ModalProps {
  opened: boolean;
  onClickOut: () => void;
}

const Modal: React.FC<ModalProps> = ({ opened, onClickOut, children }) => {
  return (
    <BackgroundModal opened={opened} onClick={() => onClickOut()}>
      <ModalStyled opened={opened} onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalStyled>
    </BackgroundModal>
  );
};

export default Modal;
