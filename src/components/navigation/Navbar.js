import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const style = {
  redText: 'red-text text-accent-3'
}

class Navbar extends Component {
  render() {
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
            <li className="nav-link">
              <Link to="/auth" className={style.redText}>Sign In/Up</Link>
            </li>
            <li className="nav-link">
              <Link to="/signout" className={style.redText}>Sign Out</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar