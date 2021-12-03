import React from 'react';
import { useField, Form, FormikProps, Formik } from 'formik';
import {
  ButtonContainer,
  InputContainer,
  InputStyled,
  Label,
  LabelContainer,
} from './styles';
import { Props } from './interfaces';

const Input: React.FC<Props> = ({
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

export default Input;
