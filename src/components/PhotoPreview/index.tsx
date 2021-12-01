import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

interface Props {
  photosUrls: string[];
}

export const Thumbmail = styled.img`
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

const PhotoPreview: React.FC<Props> = ({ photosUrls }) => {
  return (
    <Carousel showThumbs={false} showStatus={false} width={600}>
      {photosUrls.map((url) => (
        <Thumbmail src={url} alt="" />
      ))}
    </Carousel>
  );
};

export default PhotoPreview;
