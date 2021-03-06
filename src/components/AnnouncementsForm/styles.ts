import styled from 'styled-components';
import { MdShoppingCart } from 'react-icons/all';
import Properties from '../Properties';

export const Data = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.colors.black};
`;

export const CartIcon = styled(MdShoppingCart)`
  color: ${(props) => props.theme.colors.white};
  font-size: 30px;
`;
export const Price = styled.h1`
  margin: 0;
  font-size: 50px;
`;

export const Description = styled.p`
  margin: 0;
  margin-top: 10px;
  flex: 1;
`;

export const CardProperties = styled(Properties)`
  margin: 10px 0;
`;
