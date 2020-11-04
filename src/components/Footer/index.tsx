import React from 'react';

import { StyledFooter } from './styles';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <span className="icon-home">
        EasyImóveis - Desenvolvido por Willian Lemes
        <br />
        &copy; EasyImóveis - Todos os direitos reservados
      </span>
    </StyledFooter>
  );
};

export default Footer;
