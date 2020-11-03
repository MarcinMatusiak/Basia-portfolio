import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import MobileHorizontalNavigation from './MobileHorizontalNavigation/MobileHorizontalNavigation';
import Burger from './Burger/Burger';
import MobileVerticalNavigation from './MobileVerticalNavigation/MobileVerticalNavigation';
import useWindowDimensions from './useWindowDimension';
import PATHS from '../../paths';

import logo from '../../img/logo.png';

export default function DisplayNavigation () {
  useWindowDimensions();

  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const maxDimension = Math.max(width, height);

  const [open, setOpen] = useState(false);

  function useOnClickOutside (ref, handler) {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    }, [ref, handler]);
  };
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  if (maxDimension < 813 & height < width) {
    /* mobile horizontal */
    return (
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <MobileHorizontalNavigation open={open} />
      </div>
    );
  } else if (maxDimension < 813 & height > width) {
    /* mobile vertical */
    return (
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <MobileVerticalNavigation open={open} />
      </div>
    );
  } else {
    /* desktop */
    return (
      <div>
        <Link to={PATHS.HOME}>
          <img src={logo} alt='logo' className='logo' />
        </Link>
        <Navigation />
      </div>
    );
  };
}
