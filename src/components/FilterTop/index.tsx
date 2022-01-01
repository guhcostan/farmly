import React from 'react';
import { FilterContainer, FilterItemContainer, Label } from './styles';
import { FlexDiv } from '../../global-styled-components';
import Select from '../Select';
import Selector from '../Selector';

interface Props {
  nAnnouncements: number;
  order: string;
  orderBy: string;
  changeOrder: (order: string, orderBy: string) => void;
}

const FilterTop: React.FC<Props> = ({
  nAnnouncements,
  order,
  orderBy,
  changeOrder,
}) => {
  return (
    <FilterContainer>
      <FlexDiv>
        <FilterItemContainer>
          <Label>Ordenar</Label>
          <Selector
            options={[
              { label: 'Mais barato', value: 'value-ASC' },
              { label: 'Mais caro', value: 'value-DESC' },
            ]}
            onChange={(event) => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              const orderSelected = event.target.value;
              changeOrder(
                orderSelected.split('-')[1],
                orderSelected.split('-')[0]
              );
            }}
            value={`${orderBy}-${order}`}
            placeholder="Filtrar por"
          />
        </FilterItemContainer>
      </FlexDiv>

      <FilterItemContainer>{nAnnouncements} produtos</FilterItemContainer>
    </FilterContainer>
  );
};

export default FilterTop;
