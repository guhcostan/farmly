import styled from 'styled-components';

export const PropertieContainer = styled.div``;

export const PropertieRow = styled.div`
  font-size: 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  color: white;
`;

interface Props {
  align?: string;
}

export const Propertie = styled.span<Props>`
  font-size: 20px;
  width: 100%;
  text-align: ${(props) => props.align};
  justify-content: center;
  display: flex;
  align-items: center;
  font-family: 'Oswald', cursive;
  color: ${(props) => props.theme.colors.black};
`;

export const PropertieText = styled.span`
  margin-left: 4px;
  flex: 1;
  font-size: 14px;
`;
