import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import MobileHorizontalNavigation from './MobileHorizontalNavigation/MobileHorizontalNavigation';
import Burger from './Burger/Burger';
import MobileVerticalNavigation from './MobileVerticalNavigation/MobileVerticalNavigation';
import PATHS from '../../paths';

import logo from '../../img/logo.png';

export default function DisplayNavigation () {
  const [open, setOpen] = useState(false);
  const node = useRef();

  function getWindowDimensions () {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  function useWindowDimensions () {
    const [
      windowDimensions,
      setWindowDimensions
    ] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize () {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  }

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

  useOnClickOutside(node, () => setOpen(false));

  const menuId = 'menu';

  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const maxDimension = Math.max(width, height);
  const mobileMaxDim = 812;

  if (maxDimension <= mobileMaxDim & height < width) {
    /* mobile horizontal */
    return (
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <MobileHorizontalNavigation open={open} menuId={menuId} />
      </div>
    );
  } else if (maxDimension <= mobileMaxDim & height >= width) {
    /* mobile vertical */
    return (
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <MobileVerticalNavigation open={open} menuId={menuId} />
      </div>
    );
  } else {
    /* desktop */
    return (
      <div>
        <Link to={PATHS.HOME}>
          <img src={logo} alt='logo' className='logo' />
        </Link>
        <Navigation
          open={open}
          menuId={menuId}
          maxDimension={maxDimension}
          mobileMaxDim={mobileMaxDim}
        />
      </div>
    );
  };
}
