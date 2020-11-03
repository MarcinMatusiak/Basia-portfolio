import styled from 'styled-components';

export const StyledMobileVerticalNavigation = styled.nav`
  position: absolute;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateY(-32px)' : 'translateY(-200%)'};

  .navigation{
  width: 100vw;
  background-color: ${({ theme }) => theme.primaryLight};
  }

  .nav-sup{
    padding-left: 10vw;
    padding-bottom: 1vw;
  }
`;
