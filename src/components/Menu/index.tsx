import React from 'react';

import { StyledMenu } from './styles';

const Menu: React.FC = () => {
  return (
    <StyledMenu>
      <a
        className="icon-suitcase radius transition"
        title="Dashboard"
        href="/negocios"
      >
        Negócios
      </a>
      <a
        className="icon-user-plus radius transition"
        title="Receber"
        href="/pessoas"
      >
        Pessoas
      </a>
      <a
        className="icon-home radius transition"
        title="Receber"
        href="/imoveis"
      >
        Imóveis
      </a>
      <a
        className="icon-user radius transition"
        title="Meu Perfil"
        href="/perfil"
      >
        Meu Perfil
      </a>
      <a className="icon-sign-out radius transition" title="Sair" href="/sair">
        Sair
      </a>
    </StyledMenu>
  );
};

export default Menu;
