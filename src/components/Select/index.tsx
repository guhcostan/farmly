import React from 'react';
import { Option, SelectContainer, SelectStyled } from './styles';
import { Props } from './interfaces';

const Select: React.FC<Props> = ({ data }) => {
  return (
    <SelectContainer>
      <SelectStyled>
        {data.map((i) => (
          <Option>{i}</Option>
        ))}
      </SelectStyled>
    </SelectContainer>
  );
};

export default Select;
