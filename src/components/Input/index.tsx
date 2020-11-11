/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import {
  StyledInput,
  StyledLabel,
  StyledSpan,
  StyledErrorMessage
} from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  errorMessage,
  ...props
}: InputProps) => {
  Input.defaultProps = {
    errorMessage: ''
  } as Partial<InputProps>;

  return (
    <StyledLabel>
      <StyledSpan>{label}</StyledSpan>
      <StyledInput {...props} isError={!!errorMessage} />
      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </StyledLabel>
  );
};

export default Input;
