import React from 'react';
import { ButtonContainer, InputContainer, InputStyled } from './styles';
import { Props } from './interfaces';

const Input: React.FC<Props> = ({ placeholder, button }) => {
  return (
    <InputContainer>
      <InputStyled placeholder={placeholder} />
      <ButtonContainer>{button}</ButtonContainer>
    </InputContainer>
  );
};

export default Input;
