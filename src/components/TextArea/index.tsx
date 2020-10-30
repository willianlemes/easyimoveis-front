/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { StyledTextArea } from './styles';
import { StyledLabel, StyledSpan } from '../Input/styles';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  ...props
}: TextAreaProps) => {
  return (
    <StyledLabel>
      <StyledSpan>{label}</StyledSpan>
      <StyledTextArea {...props} />
    </StyledLabel>
  );
};

export default TextArea;
