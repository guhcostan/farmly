/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import ImageUploading from 'react-images-uploading';
import PhotoPreview from "../PhotoPreview";
import {MdAdd, MdRemove} from "react-icons/all";
import {Row, FlexCenter, ImageContainer} from "../../global-styled-components";
import {DragAndDropButton} from "./styles";

const ImageUploader: React.FC = () => {
  const [images, setImages] = React.useState([]);
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
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        <FlexCenter >
          <Row>
          {imageList.map((image, index) => (
              <ImageContainer key={index} className="image-item" url={image.data_url}>
                <button onClick={() => onImageRemove(index)} type="button">
                  <MdRemove size={20} style={{background: 'red', borderRadius: 30, position: "absolute", top: 4, right: 4, zIndex: 1000}}/>
                </button>
              </ImageContainer>
          ))}
          </Row>
          <DragAndDropButton
            className="upload__image-wrapper"
            style={isDragging ? { color: 'white' } : undefined}
            onClick={onImageUpload}
            type="button"
            {...dragProps}
          >
            <div>Adicionar imagem</div><MdAdd size={20}/>
          </DragAndDropButton>
        </FlexCenter>
      )}
    </ImageUploading>
  );
};

export default ImageUploader;
