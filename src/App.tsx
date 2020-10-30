import React from 'react';

import './assets/global.css';
import './assets/styles.css';

import Menu from './components/Menu';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app_header">
        <h1>
          <a className="icon-home transition" href="/" title="EasyImóveis">
            EasyImóveis
          </a>
        </h1>
        <ul className="app_header_widget">
          <li
            data-modalopen=".app_modal_contact"
            className="radius transition icon-life-ring"
          >
            Precisa de ajuda?
          </li>
          <li
            data-mobilemenu="open"
            className="app_header_widget_mobile radius transition icon-menu icon-notext"
          />
        </ul>
      </header>

      <div className="app_box">
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

          <Menu />
        </nav>

        <main className="app_main">
          <Routes />
        </main>
      </div>

      <footer className="app_footer">
        <span className="icon-home">
          EasyImóveis - Desenvolvido por Willian Lemes
          <br />
          &copy; EasyImóveis - Todos os direitos reservados
        </span>
      </footer>
    </div>
  );
};

export default App;
