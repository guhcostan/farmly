import React, { useCallback } from 'react';
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
  const renderPhotos = useCallback(() => {
    return (
      <div style={{ maxWidth: 600, flex: 1 }}>
        <Carousel showThumbs={false} showStatus={false} width="100%">
          {photosUrls.map((url) => (
            <Thumbmail src={url} alt="" />
          ))}
        </Carousel>
      </div>
    );
  }, [photosUrls]);
  return renderPhotos();
};

export default PhotoPreview;
