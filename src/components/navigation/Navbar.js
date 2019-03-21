import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { AuthUserContext } from '../../contexts/AuthUserContext'
import { NavBar, NavLogo, NavLinks, MobileNavLinks} from './StyledComponents'
import M from 'materialize-css'

class Navbar extends Component {  

   static contextType = AuthUserContext

   componentDidMount(){
      /* INIT MOBILE SIDENAV */
      const elem = document.getElementById("slide-out")
      M.Sidenav.init(elem)
   }

   componentWillUnmount(){
      const elem = document.getElementById("slide-out")
      const instance = M.Sidenav.getInstance(elem)
      instance.destroy()
   }

   handleSidenavClose = () =>{
      const elem = document.getElementById("slide-out")
      const instance = M.Sidenav.getInstance(elem)
      instance.close()
   }
  
  render() {
   console.log('Navbar render')
   let conditionalAuthLinks = this.context.authUser ? 
      (<Fragment>
         <SignedInLinks handleSidenavClose = {this.handleSidenavClose} />
         {this.context.userProfile.firstName[0] + this.context.userProfile.lastName[0]}          
      </Fragment>)
   : 
      (<SignedOutLinks handleSidenavClose = {this.handleSidenavClose} />)

   /* let conditionalAuthLinks = this.context.user ? 
      (<SignedInLinks handleSidenavClose = {this.handleSidenavClose} />) 
   : 
      (<SignedOutLinks handleSidenavClose = {this.handleSidenavClose} />) */
   
   return (
      <NavBar className="z-depth-0">        
         <NavLogo className="brand-logo">Axiom BJJ</NavLogo>      
         
         {/* MOBILE SIDENAV */}
         <a data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons hide-on-large-only">menu</i>
         </a>

         <NavLinks className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>  
            <li><Link to="/forum">Forum</Link></li>
            {conditionalAuthLinks}
         </NavLinks>

         <MobileNavLinks id="slide-out" className="sidenav">
            <li><Link to="/" onClick={this.handleSidenavClose}>Home</Link></li>  
            <li><Link to="/forum" onClick={this.handleSidenavClose}>Forum</Link></li>
            {conditionalAuthLinks}
         </MobileNavLinks>            
         
      </NavBar>
   )

  }
}

export default Navbar