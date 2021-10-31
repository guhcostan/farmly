import styled from 'styled-components';
import Button from '../Button';

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth}px;
  padding: 0 1.5rem;
  height: 112px;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const HeaderButtonContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const InputContainer = styled.div`
  margin: 0 20px 0 12px;
  width: 100%;
`;

export const HeaderButton = styled(Button)`
  margin: 0 12px;
`;
