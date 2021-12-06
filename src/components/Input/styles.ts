import styled from 'styled-components';
import InputMask from 'react-input-mask';

interface FontSizeProp {
  fontSize?: number;
}

export const InputStyled = styled.input<FontSizeProp>`
  width: 100%;
  height: 2.25rem;
  display: flex;
  border: none;
  font-size: ${(props) => props.fontSize || 16}px;
  outline: none;
`;

export const InputStyledMask = styled(InputMask)<FontSizeProp>`
  width: 100%;
  height: 2.25rem;
  font-size: ${(props) => props.fontSize || 16}px;
  display: flex;
  border: none;
  outline: none;
`;

export const TextAreaStyled = styled.textarea<FontSizeProp>`
  width: 100%;
  resize: none;
  font-size: ${(props) => props.fontSize || 16}px;
  height: 6rem;
  display: flex;
  border: none;
  outline: none;
`;

export const ButtonContainer = styled.div``;
export const Label = styled.span``;

interface BordlesssProp extends FontSizeProp {
  bordless?: boolean;
}

export const InputContainer = styled.div<BordlesssProp>`
  border-radius: 0.25rem;
  border: ${(props) => !props.bordless && '1px solid #4a4a4aff'};
  display: flex;
  align-items: center;
  font-size: ${(props) => props.fontSize || 16}px;
  padding: 2px 12px;
  background-color: white;
`;

export const LabelContainer = styled.div`
  text-align: left;
  width: 100%;
`;
