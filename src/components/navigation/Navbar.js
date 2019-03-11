import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { auth } from '../../config/fbConfig'
import { NavBar, NavLogo, NavLinks} from './StyledComponents'

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
  }
  
  render() {
    let conditionalAuthLinks = this.state.signedIn ? (<SignedInLinks />) : (<SignedOutLinks />)
    return (
      <NavBar className="z-depth-0">        
        <NavLogo className="brand-logo">Axiom BJJ</NavLogo>

          <NavLinks id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>  
            <li><Link to="/forum">Forum</Link></li>
            {conditionalAuthLinks}
          </NavLinks>
        
      </NavBar>
    )
  }
}

export default Navbar

/*

/* NAVBAR
.Navbar .brand-logo{
  padding-left: 30px !important;
}

.Forum{  
  display: flex;
  align-items: center;
  justify-content: center;
}

.Forum h1{
  text-align: center;
  color: #ff1744;
}


return (
      <nav className="Navbar transparent z-depth-0">
        <div className="nav-wrapper">
        <a className="brand-logo red-text text-accent-3">Axiom BJJ</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="nav-link">
              <Link to="/" className={style.redText}>Home</Link>
            </li>            
            <li className="nav-link">
              <Link to="/forum" className={style.redText}>Forum</Link>
            </li>
            {conditionalAuthLinks}
          </ul>
        </div>
      </nav>
    )

*/