import React from 'react';

import { StyledMobileVerticalNavigation } from './MobileVerticalNavigation.styled.js';

import Navigation from '../Navigation/Navigation.jsx';

export default function MobileVerticalNavigation ({ open }) {
  return (
    <StyledMobileVerticalNavigation open={open}>
      <Navigation />
    </StyledMobileVerticalNavigation>
  );
};
