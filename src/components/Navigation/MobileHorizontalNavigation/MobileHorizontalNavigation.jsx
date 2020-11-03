import React from 'react';

import { StyledMobileHorizontalNavigation } from './MobileHorizontalNavigation.styled.js';

import Navigation from '../Navigation/Navigation.jsx';

export default function MobileVerticalNavigation ({ open }) {
  return (
    <StyledMobileHorizontalNavigation open={open}>
      <Navigation />
    </StyledMobileHorizontalNavigation>
  );
};
