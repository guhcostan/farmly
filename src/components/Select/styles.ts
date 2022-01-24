import styled from 'styled-components';

export const SelectStyled = styled.select`
  width: 100%;
  height: 2.25rem;
  display: flex;
  border: none;
  outline: none;
`;

export const Option = styled.option``;

export const SelectContainer = styled.div`
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  padding: 2px 12px;
  font-size: 16px;
`;
