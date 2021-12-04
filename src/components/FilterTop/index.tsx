import React from 'react';
import { FilterContainer, FilterItemContainer, Label } from './styles';
import { FlexDiv } from '../../global-styled-components';
import Select from '../Select';

interface Props {
  nAnnouncements: number;
}

const FilterTop: React.FC<Props> = ({ nAnnouncements }) => {
  return (
    <FilterContainer>
      <FlexDiv>
        <FilterItemContainer>
          <Label>Ordenar</Label>
          <Select data={['Valor']} />
        </FilterItemContainer>
        <FilterItemContainer>
          <Label>Exibir</Label>
          <Select data={['Valor', 'Valor2']} />
        </FilterItemContainer>
      </FlexDiv>

      <FilterItemContainer>{nAnnouncements} produtos</FilterItemContainer>
    </FilterContainer>
  );
};

export default FilterTop;
