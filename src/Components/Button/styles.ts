import styled, { DefaultTheme } from 'styled-components';

interface ButtonStyledProps {
  textMode: boolean;
  theme: DefaultTheme;
}

interface TextProps extends ButtonStyledProps {
  margin: boolean;
}

export const ButtonStyled = styled.div<ButtonStyledProps>`
  background-color: ${(props) =>
    props.textMode ? props.theme.colors.primary : 'transparent'};
  padding: 8px 12px;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.span<TextProps>`
  margin-left: ${(props) => (props.margin ? 4 : 0)}px;
  color: ${(props) => props.theme.colors[props.textMode ? 'white' : 'black']};
  font-size: 16px;
  font-weight: 500;
`;
