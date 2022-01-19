import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  margin: 10px 0;
  padding: 32px;
  width: ${(_) => (isMobile ? 95 : 100)}%;
`;
