import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './assets/global.css';
import './assets/styles.css';

import Menu from './components/Menu';
import Routes from './routes';

import Footer from './components/Footer';

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
        <Router>
          <Menu />
          <main className="app_main">
            <Routes />
          </main>
        </Router>
      </div>

      <Footer />
    </div>
  );
};

export default App;
