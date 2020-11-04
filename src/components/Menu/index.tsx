import React from 'react';
import { Link } from 'react-router-dom';

import { StyledMenu } from './styles';

const Menu: React.FC = () => {
  return (
    <nav className="app_sidebar radius box-shadow">
      <div
        data-mobilemenu="close"
        className="app_sidebar_widget_mobile radius transition icon-error icon-notext"
      />

      <div className="app_sidebar_user app_widget_title">
        <span className="user">
          <img className="rounded" alt="" title="" src="" />
          <span>Willian Lemes</span>
        </span>
        <span className="plan radius">Free</span>
      </div>

      <StyledMenu>
        <Link
          className="icon-suitcase radius transition"
          title="Dashboard"
          to="/negocios"
        >
          Negócios
        </Link>
        <Link
          className="icon-user-plus radius transition"
          title="Receber"
          to="/pessoas"
        >
          Pessoas
        </Link>
        <Link
          className="icon-home radius transition"
          title="Receber"
          to="/imoveis"
        >
          Imóveis
        </Link>
        <Link
          className="icon-user radius transition"
          title="Meu Perfil"
          to="/perfil"
        >
          Meu Perfil
        </Link>
        <Link
          className="icon-sign-out radius transition"
          title="Sair"
          to="/sair"
        >
          Sair
        </Link>
      </StyledMenu>
    </nav>
  );
};

export default Menu;
