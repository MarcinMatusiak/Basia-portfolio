import React from 'react';

import { StyledBurger } from './Burger.styled';

export default function Burger ({ open, setOpen, ...props }) {
  const isExpanded = !!open;

  return (
    <StyledBurger
      aria-label='Toggle menu'
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
}
