/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import ImageUploading from 'react-images-uploading';
import PhotoPreview from "../PhotoPreview";
import {MdRemove} from "react-icons/all";
import {Row} from "../../global-styled-components";

const ImageUploader: React.FC = () => {
  const [images, setImages] = React.useState([]);
  console.log('images',images)
  const onChange = (value) => {
    setImages(value)
  }
  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={10}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        <div className="upload__image-wrapper">
          <PhotoPreview photosUrls={images.map(i => i.data_url)}/>
          <button
            style={isDragging ? { color: 'red' } : undefined}
            onClick={onImageUpload}
            type="button"
            {...dragProps}
          >
            Enviar nova imagem
          </button>
          <Row>
          {imageList.map((image, index) => (
            <div key={index} className="image-item" style={{position: "relative"}}>
              <img src={image.data_url} alt="" width="100" />
                <button onClick={() => onImageRemove(index)} type="button">
                  <MdRemove size={20} style={{background: 'red', borderRadius: 30, position: "absolute", top: 4, right: 4}}/>
                </button>
            </div>
          ))}
          </Row>
        </div>
      )}
    </ImageUploading>
  );
};

export default ImageUploader;
