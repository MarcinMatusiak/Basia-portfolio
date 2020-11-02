import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Categories from './Categories';
import PATHS from '../../paths';
import logo from '../../img/logo.png';

export default function Navigation () {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick () {
    setIsClicked(!isClicked);
  };

  return (
    <section className='navigation'>
      <nav>
        <Link to={PATHS.HOME}>
          <img src={logo} alt='logo' className='logo' />
        </Link>
        <ul>
          <li className='nav-sup'>
            <Link to={PATHS.HOME}>
              Strona domowa
            </Link>
          </li>
          <li className='nav-sup'>
            <a onClick={handleClick}>
              Portfolio
            </a>
            {isClicked && <Categories handleClick={handleClick} />}
          </li>
          <li className='nav-sup'>
            <Link to={PATHS.PRICES}>
              Cennik
            </Link>
          </li>
          <li className='nav-sup'>
            <Link to={PATHS.ABOUT}>
              O mnie
            </Link>
          </li>
          <li className='nav-sup'>
            <Link to={PATHS.CONTACT}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </section>

  );
};
