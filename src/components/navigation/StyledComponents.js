import styled from 'styled-components'

export const NavBar = styled.nav`
  color: #ff1744 !important;
  background-color: transparent;
  padding: 0 1rem; 

  a{
    color: #ff1744 !important;
    background-color: transparent !important;
  }
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
  .chip{
      color: white !important;
      background-color: #ff1744 !important;
  }
`

export const MobileNavLinks = styled.ul`
   background-color: #ff1744 !important;
   li{
     margin-top: 2rem; 
   }
   a{
      color: white !important;
      background-color: transparent !important;
      font-size: 2rem !important;
   }
   .chip{
      color: #ff1744 !important;
      background-color: white !important;
  }
`