import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { Container } from '../../global-styled-components';

export const SideContainer = styled(Container)`
  align-items: center;
  display: flex;
  padding: 30px 20px;
  width: ${(_) => (isMobile ? '80vw' : '500px')};
  flex-direction: column;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(208px, 1fr));
`;
