import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import firebase from '../../config/fbConfig'

const style = {
  redText: 'red-text text-accent-3'
}

class Navbar extends Component {  

  state = {
    signedIn: false
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
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
  }
}

export default Navbar