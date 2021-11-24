import styled from 'styled-components';

interface FullWidthWrapperColorProps {
  color?: string;
  image?: string;
}
export const FullWidthWrapperColor = styled.div<FullWidthWrapperColorProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.color};
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.image});
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth}px;
`;

export const BackgroundColorWidth = styled.div`
  overflow-x: hidden;
  width: 100%;
  background-color: #f5f5f5;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlexDiv = styled.div`
  display: flex;
`;
