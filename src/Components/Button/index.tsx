import React from 'react';
import { Props } from './interfaces';
import { ButtonStyled, ButtonText } from './styles';

const Button: React.FC<Props> = ({
  icon,
  text,
  textMode,
  style,
  fontSize,
  className,
}) => {
  return (
    <ButtonStyled
      textMode={!textMode}
      style={style}
      padding={!icon}
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
