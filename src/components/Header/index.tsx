/* eslint-disable react/prop-types */
import React from 'react';

import { StyledHeder } from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <StyledHeder>
      <h2>{children}</h2>
    </StyledHeder>
  );
};

export default Header;
