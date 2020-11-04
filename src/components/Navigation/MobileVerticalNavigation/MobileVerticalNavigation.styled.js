import styled from 'styled-components';

export const StyledMobileVerticalNavigation = styled.div`
  position: absolute;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateY(-45px)' : 'translateY(-200%)'};
  

  .navigation{
  width: calc(100vw - 20px);
  background-color: ${({ theme }) => theme.primaryLight};
  }

  .nav-sup{
    padding-left: calc(52px + 2vw);
    padding-bottom: 1vw;
  }
  
`;
