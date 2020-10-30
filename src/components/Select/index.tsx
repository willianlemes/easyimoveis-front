/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { StyledSelect } from './styles';
import { StyledLabel, StyledSpan } from '../Input/styles';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  ...props
}: SelectProps) => {
  return (
    <StyledLabel>
      <StyledSpan>{label}</StyledSpan>
      <StyledSelect {...props}>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </StyledSelect>
    </StyledLabel>
  );
};

export default Select;
