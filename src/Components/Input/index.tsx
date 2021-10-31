import React from 'react';
import { InputStyled } from './styles';
import { Props } from './interfaces';

const Input: React.FC<Props> = ({ placeholder }) => {
  return <InputStyled placeholder={placeholder} />;
};

export default Input;
