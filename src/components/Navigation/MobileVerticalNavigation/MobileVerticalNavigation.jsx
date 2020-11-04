import React from 'react';

import { StyledMobileVerticalNavigation } from './MobileVerticalNavigation.styled.js';

import Navigation from '../Navigation/Navigation.jsx';

export default function MobileVerticalNavigation ({ open, ...props }) {
  const isHidden = !!open;

  return (
    <StyledMobileVerticalNavigation
      open={open}
      aria-hidden={!isHidden}
      {...props}
    >
      <Navigation
        open={open}
        aria-hidden={!isHidden}
        {...props}
      />
    </StyledMobileVerticalNavigation>
  );
};
