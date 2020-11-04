import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { StyledNavigation } from './Navigation.styled';

import Categories from '../Categories';
import PATHS from '../../../paths';

export default function Navigation ({ open, maxDimension, mobileMaxDim, ...props }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick (e) {
    e.preventDefault();
    setIsClicked(!isClicked);
  };

  console.log(maxDimension);

  const isHidden = (mobileMaxDim <= maxDimension) ? true : open;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledNavigation
      aria-hidden={!isHidden}
      {...props}
    >
      <section className='navigation'>
        <ul>
          <li className='nav-sup'>
            <Link
              to={PATHS.HOME}
              tabIndex={tabIndex}
            >
              Strona domowa
            </Link>
          </li>
          <li className='nav-sup'>
            <button
              className='a-like-btn'
              onClick={handleClick}
              tabIndex={tabIndex}
            >
              Portfolio
            </button>
            {isClicked &&
              <Categories
                handleClick={handleClick}
                isHidden={isHidden}
              />}
          </li>
          <li className='nav-sup'>
            <Link
              to={PATHS.PRICES}
              tabIndex={tabIndex}
            >
              Cennik
            </Link>
          </li>
          <li className='nav-sup'>
            <Link
              to={PATHS.ABOUT}
              tabIndex={tabIndex}
            >
              O mnie
            </Link>
          </li>
          <li className='nav-sup'>
            <Link
              to={PATHS.CONTACT}
              tabIndex={tabIndex}
            >
              Kontakt
            </Link>
          </li>
        </ul>

      </section>
    </StyledNavigation>

  );
};
