import React from 'react';
import { Props } from './interfaces';
import { ButtonStyled, ButtonText } from './styles';

const Button: React.FC<Props> = ({
  icon,
  text,
  textMode,
  onClick,
  style,
  fontSize,
  className,
}) => {
  return (
    <ButtonStyled
      textMode={!textMode}
      style={style}
      onClick={onClick}
      className={className}
    >
      {icon}
      {text && (
        <ButtonText textMode={!textMode} margin={!!icon} fontSize={fontSize}>
          {text}
        </ButtonText>
      )}
    </ButtonStyled>
  );
};

export default Button;
