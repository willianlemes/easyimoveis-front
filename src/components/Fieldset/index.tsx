import React from 'react';

import { StyledFieldset, StyledLegend } from './styles';

interface FieldsetProps {
  legend: string;
  children: React.ReactNode;
}

const Fieldset: React.FC<FieldsetProps> = ({
  legend,
  children
}: FieldsetProps) => {
  return (
    <StyledFieldset>
      <StyledLegend>{legend}</StyledLegend>
      {children}
    </StyledFieldset>
  );
};

export default Fieldset;
