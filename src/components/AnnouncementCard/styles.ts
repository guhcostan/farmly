import styled from 'styled-components';
import Properties from '../Properties';

export const CardContainer = styled.div`
  width: 250px;
  border-radius: 10px;
  box-shadow: rgb(40 41 61 / 4%) 0px 4px 8px, rgb(96 97 112 / 16%) 0px 8px 16px;
  margin: 5px;
  height: 400px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Thumbmail = styled.img`
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;
export const CardProperties = styled(Properties)`
  padding: 10px 20px;
`;

export const Price = styled.span`
  font-size: 40px;
  font-family: 'Oswald', cursive;
  color: white;
  text-align: center;
`;

export const PriceContainer = styled.div`
  margin: 10px;
  height: 30px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 20px 0px;
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: center;
`;

export const PriceMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;
