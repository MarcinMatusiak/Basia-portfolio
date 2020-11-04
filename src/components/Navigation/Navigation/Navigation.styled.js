import styled from 'styled-components';

export const StyledNavigation = styled.nav`

  ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding-left: 2vw;
    font-weight: 600; 
    font-size: 1.2rem;
    line-height: 1.4rem;
    text-transform: uppercase;
    
      ul{
        flex-direction: column;
        font-size: 1.1rem;
        padding-left: 1vw;
        text-transform: none;

        li{
          padding: 1px;
        }

        ul{
            font-size: 1rem;
            line-height: 1.4rem;
            padding-left: 1vw;
            }
    }
}
    
.nav-avg:first-of-type, .nav-sub:first-of-type{
    padding-top: 1vh;
}

.nav-avg:last-of-type, .nav-sub:last-of-type{
    padding-bottom: 1vh;
}

.a-like-btn {
  font: inherit;
  border: none;
  text-transform: inherit;
  background-color: ${({ theme }) => theme.primaryLight};
  margin: 0;
  padding: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.primaryDark};
}

  a, .a-like-btn {
    transition: color 0.3s ease-out;
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }

    &:focus{
      outline: 1px solid ${({ theme }) => theme.primaryHover};
    }
  }
`;
