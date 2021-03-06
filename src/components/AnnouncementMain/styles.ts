import styled from 'styled-components';
import { MdShoppingCart } from 'react-icons/all';
import Properties from '../Properties';

export const Data = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  color: ${(props) => props.theme.colors.black};
  font-size: 50px;
`;

export const Description = styled.p`
  margin: 0;
  padding: 20px 0;
  margin-top: 10px;
  flex: 1;
`;

export const CardProperties = styled(Properties)`
  margin: 10px 0;
`;
