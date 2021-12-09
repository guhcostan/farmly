import React from 'react';
import { MdArrowDropDown, MdChevronLeft } from 'react-icons/all';
import { SelectContainer, SelectInput } from './styles';
import { Props } from './interfaces';

const Selector: React.FC<Props> = ({
  options,
  placeholder,
  className,
  onChange,
  onBlur,
  name,
}) => {
  return (
    <SelectContainer className={className}>
      <SelectInput onChange={onChange} onBlur={onBlur} name={name}>
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
