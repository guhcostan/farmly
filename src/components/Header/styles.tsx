import styled from 'styled-components';
import Button from '../Button';
import { FullWidthWrapperColor } from '../../global-styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth}px;
  padding: 0;
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
  margin: 0 30px 0 15px;
  width: 100%;
`;

export const HeaderButton = styled(Button)`
  margin: 0 12px;
`;

export const HeaderStickContainer = styled(FullWidthWrapperColor)`
  position: sticky;
  top: 0;
  z-index: 1;
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
`;
