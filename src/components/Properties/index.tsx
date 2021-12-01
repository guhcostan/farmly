import { MdCalendarToday, MdPlace, SiHappycow } from 'react-icons/all';
import { GiCow } from 'react-icons/gi';
import React from 'react';
import { Propertie, PropertieContainer, PropertieText } from './styles';

export interface Props {
  nMonths: number;
  city: string;
  state: string;
  breed: string;
  align?: string;
  nOxen: number;
  className?: string;
}

const Properties: React.FC<Props> = ({
  city,
  state,
  breed,
  nOxen,
  nMonths,
  align = 'center',
  className,
}) => {
  return (
    <PropertieContainer className={className}>
      <Propertie align={align}>
        <SiHappycow />
        <PropertieText>{nOxen} cabeças de gado</PropertieText>
      </Propertie>
      <Propertie align={align}>
        <GiCow />
        <PropertieText>{breed}</PropertieText>
      </Propertie>
      <Propertie align={align}>
        <MdPlace />
        <PropertieText>{`${city}-${state}`}</PropertieText>
      </Propertie>
      <Propertie align={align}>
        <MdCalendarToday />
        <PropertieText>{nMonths} meses</PropertieText>
      </Propertie>
    </PropertieContainer>
  );
};

export default Properties;
