import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import Input from './components/Input';
import Button from './components/Button';
import InputFormik from './components/InputFormik';
import Selector from './components/Selector';
import SelectorFormik from './components/SelectorFormik';

interface FullWidthWrapperColorProps {
  color?: string;
  height?: string;
  image?: string;
}

export const FullWidthWrapperColor = styled.div<FullWidthWrapperColorProps>`
  max-width: ${(props) => props.theme.maxWidth}px;
  width: ${() => (isMobile ? 95 : 100)}%;
  border-radius: 10px;
  margin: 10px 0;
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.color};
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.image});
`;

export const Container = styled.div`
  width: ${() => (isMobile ? 95 : 100)}%;
  max-width: ${(props) => props.theme.maxWidth}px;
`;

export const BackgroundColorWidth = styled.div`
  overflow-x: hidden;
  width: 100%;
  background-color: ${(props) => props.theme.colors.light};
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackgroundColorWidthWhite = styled(BackgroundColorWidth)``;
export const InputWithMargin = styled(Input)`
  margin: 8px 0;
`;

export const InputFormikWithMargin = styled(InputFormik)`
  margin: 8px 0;
`;

export const SelectorWithMargin = styled(Selector)`
  margin: 8px 0;
`;

export const SelectorFormikWithMargin = styled(SelectorFormik)`
  margin: 8px 0;
`;

export const FlexDiv = styled.div`
  display: flex;
`;

interface ImageProp {
  url: string;
}
export const ImageContainer = styled.image<ImageProp>`
  position: relative;
  display: inline-block;
  background-image: url(${(props) => props.url});
  width: 200px;
  height: 150px;
  margin: 0 10px;
  background-position: center;
  background-size: cover;
`;
export const FlexCenter = styled(FlexDiv)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Row = styled(FlexDiv)`
  display: flex;
  flex-direction: row;
`;
export const RowCenter = styled(Row)`
  justify-content: center;
`;

export const SquareButton = styled(Button)`
  width: 100%;
  border-radius: 6px;
  height: 42px;
`;

export const RowSpaceBetween = styled(Row)`
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 30px;
`;

export const Subtitle = styled.div`
  font-size: 24px;
  color: ${(props) => props.theme.colors.black};
  font-weight: bold;
`;
