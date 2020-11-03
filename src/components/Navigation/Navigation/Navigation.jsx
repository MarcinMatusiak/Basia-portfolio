import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { StyledNavigation } from './Navigation.styled';

import Categories from '../Categories';
import PATHS from '../../../paths';

export default function Navigation () {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick () {
    setIsClicked(!isClicked);
  };

  return (
    <StyledNavigation>
      <section className='navigation'>
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

      </section>
    </StyledNavigation>

  );
};
