/* eslint-disable react/prop-types */
import React from 'react';

import { StyledFieldset, StyledLegend } from './styles';

type FieldsetProps = {
  legend: string;
};

const Fieldset: React.FC<FieldsetProps> = ({ legend, children }) => {
  return (
    <StyledFieldset>
      <StyledLegend>{legend}</StyledLegend>
      {children}
    </StyledFieldset>
  );
};

export default Fieldset;
