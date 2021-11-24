import styled, { DefaultTheme } from 'styled-components';

interface ButtonStyledProps {
  textMode: boolean;
  padding: boolean;
  theme: DefaultTheme;
}

interface TextProps {
  margin: boolean;
  fontSize?: number;
  textMode: boolean;
  theme: DefaultTheme;
}

export const ButtonStyled = styled.div<ButtonStyledProps>`
  background-color: ${(props) =>
    props.textMode ? props.theme.colors.primary : 'transparent'};
  padding: ${(props) => (props.padding ? '8px 12px' : '0px')};
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.span<TextProps>`
  margin-left: ${(props) => (props.margin ? 4 : 0)}px;
  color: ${(props) => props.theme.colors[props.textMode ? 'white' : 'black']};
  font-size: ${(props) => props.fontSize || 16}px;
  font-weight: 500;
`;
