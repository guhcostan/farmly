import React from 'react';
import { Props } from './interfaces';
import { ButtonStyled, ButtonText } from './styles';

const Button: React.FC<Props> = ({
  icon,
  text,
  textMode,
  style,
  className,
}) => {
  return (
    <ButtonStyled textMode={!textMode} style={style} className={className}>
      {icon}
      <ButtonText textMode={!textMode} margin={!!icon}>
        {text}
      </ButtonText>
    </ButtonStyled>
  );
};

export default Button;
