import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { auth } from '../../config/fbConfig'
import { NavBar, NavLogo, NavLinks, MobileNavLinks} from './StyledComponents'
import M from 'materialize-css'

class Navbar extends Component {  

  state = {
    signedIn: false
  }

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          signedIn: true
        })        
      } else {
        this.setState({
          signedIn: false
        })
      }      
    })

    const elem = document.getElementById("slide-out")
    M.Sidenav.init(elem)
  }

   componentWillUnmount(){
      const elem = document.getElementById("slide-out")
      const instance = M.Sidenav.getInstance(elem)
      instance.destroy()
   }
  
  render() {
    let conditionalAuthLinks = this.state.signedIn ? (<SignedInLinks />) : (<SignedOutLinks />)
    return (
      <NavBar className="z-depth-0">        
        <NavLogo className="brand-logo">Axiom BJJ</NavLogo>      
        
         <a data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons hide-on-large-only">menu</i>
         </a>

         <NavLinks className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>  
            <li><Link to="/forum">Forum</Link></li>
            {conditionalAuthLinks}
         </NavLinks>

         <MobileNavLinks id="slide-out" className="sidenav">
            <li><Link to="/">Home</Link></li>  
            <li><Link to="/forum">Forum</Link></li>
            {conditionalAuthLinks}
         </MobileNavLinks>            
        
      </NavBar>
    )
  }
}

export default Navbar