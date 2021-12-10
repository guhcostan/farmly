/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useCallback, useEffect, useRef } from 'react';
import Input from "../Input";

interface Props {
  onPlacesChanged: (place: any) => void;
  placeholder: string;
  className?: string
}
const SearchBox : React.FC<Props> = ({ onPlacesChanged, placeholder, className }) => {
  const input = useRef(null);
  const searchBox = useRef(null);

  const handleOnPlacesChanged = useCallback(() => {
    if (onPlacesChanged) {
      onPlacesChanged(searchBox.current.getPlaces());
    }
  }, [onPlacesChanged, searchBox]);

  useEffect(() => {
    if (!searchBox.current && google.maps) {
      searchBox.current = new google.maps.places.SearchBox(input.current);
      searchBox.current.addListener('places_changed', handleOnPlacesChanged);
    }

    return () => {
      if (google.maps) {
        searchBox.current = null;
        google.maps.event.clearInstanceListeners(searchBox);
      }
    };
  }, [google, handleOnPlacesChanged]);

  return <Input ref={input} placeholder={placeholder} type="text" className={className} />;
};

export default SearchBox;
