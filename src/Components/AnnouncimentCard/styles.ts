import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 300px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  margin: 10px;
  height: 400px;
  display: flex;
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
  justify-content: center;
`;

export const PropertieContainer = styled.div`
  padding: 10px;
  margin: 10px 0;
`;
export const PropertieRow = styled.div`
  font-size: 20px;
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
  color: white;
`;
export const PropertieText = styled.span`
  margin-left: 4px;
`;
