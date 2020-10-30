/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { StyledInputDatePicker } from './styles';
import { StyledLabel, StyledSpan } from '../Input/styles';

interface InputDatePickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const InputDatePicker: React.FC<InputDatePickerProps> = ({
  label,
  ...props
}: InputDatePickerProps) => {
  return (
    <StyledLabel>
      <StyledSpan>{label}</StyledSpan>
      <StyledInputDatePicker {...props} type="date" />
    </StyledLabel>
  );
};

export default InputDatePicker;
