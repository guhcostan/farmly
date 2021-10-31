import styled from 'styled-components';

interface FullWidthWrapperColorProps {
  color: string;
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
  padding: 20px;
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth}px;
`;
