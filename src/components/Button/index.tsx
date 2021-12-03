import React from 'react';
import { Props } from './interfaces';
import { ButtonContainer, ButtonStyled, ButtonText } from './styles';

const Button: React.FC<Props> = ({
  icon,
  text,
  textMode,
  onClick,
  style,
  type = 'button',
  fontSize,
  className,
  disabled,
}) => {
  return (
    <ButtonStyled
      textMode={!textMode}
      style={style}
      onClick={onClick}
      className={className}
      disabled={disabled}
      type={type}
    >
      <ButtonContainer>
        {icon}
        {text && (
          <ButtonText textMode={!textMode} margin={!!icon} fontSize={fontSize}>
            {text}
          </ButtonText>
        )}
      </ButtonContainer>
    </ButtonStyled>
  );
};

export default Button;
