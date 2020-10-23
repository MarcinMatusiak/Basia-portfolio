import React from 'react';

import { Route, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Prices from './Prices';
import Categories from './Categories';
import PATHS from '../paths';
import logo from '../img/logo.png';

export default function Navigation () {
  return (
    <nav>
      <Link to={PATHS.HOME}>
        <img src={logo} alt='logo' className='logo' />
      </Link>
      <ul>
        <li className='nav-sup'><Link to={PATHS.HOME}>Strona domowa</Link></li>
        <li className='nav-sup'><Link to={PATHS.PORTFOLIO}>Portfolio</Link></li>
        <Route path={PATHS.PORTFOLIO} component={Categories} />
        <li className='nav-sup'><Link to={PATHS.PRICES}>Cennik</Link></li>
        <li className='nav-sup'><Link to={PATHS.ABOUT}>O mnie</Link></li>
        <li className='nav-sup'><Link to={PATHS.CONTACT}>Kontakt</Link></li>
      </ul>

      <Route exact path={PATHS.HOME} component={Home} />
      <Route path={PATHS.PRICES} component={Prices} />
      <Route path={PATHS.ABOUT} component={About} />
      <Route path={PATHS.CONTACT} component={Contact} />
    </nav>
  );
};
