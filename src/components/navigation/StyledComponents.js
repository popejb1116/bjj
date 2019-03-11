import styled from 'styled-components'

export const NavBar = styled.nav`
  color: #ff1744;
  background-color: transparent;
  padding: 0 1rem; 
`

export const NavLogo = styled.div`
  color: #ff1744 !important;
  font-weight: bold;
`

// RR4 MAPS LINK COMPONENT AS A TAG
export const NavLinks = styled.ul`
  a{
    color: #ff1744 !important;
    background-color: transparent !important;
  }
  a:hover{
    text-decoration: underline;
  }
`