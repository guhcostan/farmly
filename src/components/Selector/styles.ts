import styled from 'styled-components';

export const SelectContainer = styled.div`
  padding: 12px 8px;
  border-radius: 4px;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.black};
  display: flex;
`;

export const SelectInput = styled.select`
  -webkit-appearance: none;
  appearance: none;
  border: none;
  flex: 1;
`;
