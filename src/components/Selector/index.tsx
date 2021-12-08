import React from 'react';
import { MdArrowDropDown, MdChevronLeft } from 'react-icons/all';
import { SelectContainer, SelectInput } from './styles';

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  placeholder: string;
  // eslint-disable-next-line react/require-default-props
  className?: string;
}
const Selector: React.FC<Props> = ({ options, placeholder, className }) => {
  return (
    <SelectContainer className={className}>
      <SelectInput name="select">
        <option style={{ color: 'gray' }} value="" disabled selected>
          {placeholder}
        </option>
        {options.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </SelectInput>
      <MdArrowDropDown />
    </SelectContainer>
  );
};

export default Selector;
