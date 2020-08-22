import React, { ReactNode } from 'react';
import { Typography } from '@material-ui/core';

import { FieldsetContainer, Legend } from './styles';

type FieldsetProps = {
  /**
   * The fieldset's legend to be rendered.
   */
  legend: string;

  /**
   * The fieldsets's children components.
   */
  children: ReactNode;
};

const Fieldset: React.FC<FieldsetProps> = ({
  legend,
  children
}: FieldsetProps) => (
  <FieldsetContainer>
    <Legend>
      <Typography variant="overline">{legend}</Typography>
    </Legend>
    {children}
  </FieldsetContainer>
);

export default Fieldset;
