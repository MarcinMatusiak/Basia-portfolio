import React from 'react';

import { StyledMobileHorizontalNavigation } from './MobileHorizontalNavigation.styled.js';

import Navigation from '../Navigation/Navigation.jsx';

export default function MobileHorizontalNavigation ({ open, ...props }) {
  const isHidden = !!open;

  return (
    <StyledMobileHorizontalNavigation
      open={open}
      aria-hidden={!isHidden}
      {...props}
    >
      <Navigation
        open={open}
        aria-hidden={!isHidden}
        {...props}
      />
    </StyledMobileHorizontalNavigation>
  );
};
