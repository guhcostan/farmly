import styled from 'styled-components';

export const FilterContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
  max-width: ${(props) => props.theme.maxWidth}px;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;
export const FilterItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;
export const Label = styled.span`
  margin-right: 10px;
`;
