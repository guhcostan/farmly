import styled from 'styled-components';
import { Container } from '../../global-styled-components';

export const HomeContainer = styled(Container)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 20px;
  margin: 20px 0;
  padding: 0 20px;
  padding-bottom: 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(208px, 1fr));
`;
