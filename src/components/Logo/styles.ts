import styled from 'styled-components';

export const LogoContainer = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-size: 32px;
  cursor: pointer;
`;
export const LogoText = styled.span`
  font-size: 20px;
`;
export const LogoTextBold = styled(LogoText)`
  font-size: 40px;
  font-weight: 900;
`;
