import React from 'react';
import { isMobile } from 'react-device-detect';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useDimensions from 'react-use-dimensions';
import PhotoPreview from '../PhotoPreview';
import {
  ButtonContainer,
  CardProperties,
  CartIcon,
  Data,
  Description,
  Price,
  Title,
} from './styles';
import { Row, RowSpaceBetween } from '../../global-styled-components';
import { Props as PropertiesProps } from '../Properties';
import Button from '../Button';

interface Props extends PropertiesProps {
  photos: string[];
  price: number;
  title: string;
  description: string;
}

const Wrapper: React.FC = ({ children }) => {
  const [ref, { x, y, width }] = useDimensions();
  const style = {
    margin: '0 0 20px 0',
  };
  if (width < 1000) {
    return (
      <div style={style} ref={ref}>
        {children}
      </div>
    );
  }
  return (
    <Row style={style} ref={ref}>
      {children}
    </Row>
  );
};
const AnnouncementMain: React.FC<Props> = ({
  photos,
  state,
  breed,
  city,
  price,
  nMonths,
  nOxen,
  title,
  description,
}) => {
  return (
    <Wrapper>
      <PhotoPreview photosUrls={photos} />
      <Data>
        <Title>{title}</Title>
        <RowSpaceBetween>
          <Price>
            R$ {Number.parseFloat(String(price)).toFixed(2).replace('.', ',')}
          </Price>
          {!isMobile && (
            <ButtonContainer>
              <Button
                text="Comprar"
                fontSize={30}
                icon={<CartIcon size={20} />}
              />
              <Button textMode text="Fazer oferta" fontSize={12} />
            </ButtonContainer>
          )}
        </RowSpaceBetween>
        <CardProperties
          align="left"
          state={state}
          breed={breed}
          city={city}
          nMonths={nMonths}
          nOxen={nOxen}
        />
        {isMobile && (
          <ButtonContainer>
            <Button
              text="Comprar"
              fontSize={30}
              icon={<CartIcon size={20} />}
            />
            <Button textMode text="Fazer oferta" fontSize={12} />
          </ButtonContainer>
        )}
        <Description>{description}</Description>
      </Data>
    </Wrapper>
  );
};

export default AnnouncementMain;
