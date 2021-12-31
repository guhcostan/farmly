import React from 'react';
import { isMobile } from 'react-device-detect';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useDimensions from 'react-use-dimensions';
import PhotoPreview from '../PhotoPreview';
import {
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
  if (width < 1000) {
    return <div ref={ref}>{children}</div>;
  }
  return <Row ref={ref}>{children}</Row>;
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
            <Button text="Comprar" fontSize={50} icon={<CartIcon />} />
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
        <Description>{description}</Description>
        {isMobile && (
          <Button text="Comprar" fontSize={50} icon={<CartIcon />} />
        )}
      </Data>
    </Wrapper>
  );
};

export default AnnouncementMain;
