/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { StyledInput, StyledLabel, StyledSpan } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }: InputProps) => {
  return (
    <StyledLabel>
      <StyledSpan>{label}</StyledSpan>
      <StyledInput {...props} />
    </StyledLabel>
  );
};

export default Input;
