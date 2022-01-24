import styled from 'styled-components';

export const DragAndDropButton = styled.button`
  width: 200px;
  height: 100px;
  margin-top: 20px;
  background-color: #c7c7c7;
  border: 1px solid ${(props) => props.theme.colors.black};
  margin-bottom: 10px;
  border-radius: 10px;
`;
