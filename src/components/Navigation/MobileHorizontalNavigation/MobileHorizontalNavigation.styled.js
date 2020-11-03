import styled from 'styled-components';

export const StyledMobileHorizontalNavigation = styled.nav`
  position: absolute;
  top: 0px;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  .navigation{
  
  padding-top: 4vw;
  padding-left: calc(6vh + 32px);
  padding-right: 2vw;
  background-color: ${({ theme }) => theme.primaryLight};
    >ul{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
  }

  .nav-sup{
    padding-bottom: 1vw;
  }
`;
