import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaUserLock,
  FaHome,
  FaUserFriends,
  FaBusinessTime,
  FaDoorOpen
} from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';

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
          <BsFillPersonFill size={24} className="menu-icon" />
          <span>Willian Lemes</span>
        </span>
        <span className="plan radius">Free</span>
      </div>

      <StyledMenu>
        <Link className="radius transition" title="Dashboard" to="/negocios">
          <FaBusinessTime size={24} className="menu-icon" />
          Negócios
        </Link>
        <Link className="radius transition" title="Receber" to="/pessoas">
          <FaUserFriends size={24} className="menu-icon" />
          Pessoas
        </Link>
        <Link className="radius transition" title="Receber" to="/imoveis">
          <FaHome size={24} className="menu-icon" />
          Imóveis
        </Link>
        <Link className="radius transition" title="Meu Perfil" to="/perfil">
          <FaUserLock size={24} className="menu-icon" />
          Meu Perfil
        </Link>
        <Link className="radius transition" title="Sair" to="/sair">
          <FaDoorOpen size={24} className="menu-icon" />
          Sair
        </Link>
      </StyledMenu>
    </nav>
  );
};

export default Menu;
