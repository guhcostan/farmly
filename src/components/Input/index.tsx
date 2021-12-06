import React, { useCallback } from 'react';
import {
  ButtonContainer,
  InputContainer,
  InputStyled,
  InputStyledMask,
  Label,
  LabelContainer,
  TextAreaStyled,
} from './styles';
import { Props } from './interfaces';

const Input: React.FC<Props> = ({
  placeholder,
  button,
  label,
  type,
  fontSize,
  className,
  onBlur,
  onChange,
  name,
  bordless,
  prefix,
  mask,
}) => {
  const getInput = useCallback(() => {
    if (type === 'textarea') {
      return (
        <TextAreaStyled
          name={name}
          onBlur={onBlur}
          fontSize={fontSize}
          onChange={onChange}
          placeholder={placeholder}
        />
      );
    }
    return !mask ? (
      <InputStyled
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        fontSize={fontSize}
        placeholder={placeholder}
        type={type}
      />
    ) : (
      <InputStyledMask
        name={name}
        mask={mask}
        fontSize={fontSize}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    );
  }, [fontSize, mask, name, onBlur, onChange, placeholder, type]);
  return (
    <LabelContainer className={className}>
      <Label>{label}</Label>
      <InputContainer bordless={bordless} fontSize={fontSize}>
        {prefix && `${prefix} `}
        {getInput()}
        <ButtonContainer>{button}</ButtonContainer>
      </InputContainer>
    </LabelContainer>
  );
};

export default Input;
