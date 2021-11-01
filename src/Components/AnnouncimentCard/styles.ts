import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 300px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.black};
  margin: 10px;
  height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Price = styled.span`
  font-size: 40px;
  font-family: 'Oswald', cursive;
  color: white;
  text-align: center;
`;

export const PriceContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 20px 0px;
  background-color: ${(props) => props.theme.colors.primary};
  border-top: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 0 0 10px 10px;
  justify-content: center;
`;

export const PriceMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

export const PropertieContainer = styled.div`
  padding: 10px 20px;
`;
export const PropertieRow = styled.div`
  font-size: 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  color: white;
`;
export const Propertie = styled.span`
  font-size: 20px;
  width: 50%;
  display: flex;
  align-items: center;
  font-family: 'Oswald', cursive;
  color: ${(props) => props.theme.colors.black};
`;
export const PropertieText = styled.span`
  margin-left: 4px;
`;
