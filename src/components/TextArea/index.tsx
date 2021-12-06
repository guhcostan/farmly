import React from 'react';
import {
  ButtonContainer,
  InputContainer,
  InputStyled,
  Label,
  LabelContainer,
} from './styles';
import { Props } from './interfaces';

const TextArea: React.FC<Props> = ({
  placeholder,
  button,
  label,
  type,
  className,
  onBlur,
  onChange,
  name,
}) => {
  return (
    <LabelContainer className={className}>
      <Label>{label}</Label>
      <InputContainer>
        <InputStyled
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
        />
        <ButtonContainer>{button}</ButtonContainer>
      </InputContainer>
    </LabelContainer>
  );
};

export default TextArea;
