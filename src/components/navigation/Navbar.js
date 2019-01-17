import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar deep-orange accent-3">
        <div className="nav-wrapper">
        <a className="brand-logo">Axiom BJJ</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/upcoming">Upcoming Events</Link>
            </li>
            <li className="nav-link">
              <Link to="/forum">Forum</Link>
            </li>
            <li className="nav-link">
              <Link to="/auth">Sign In/Up</Link>
            </li>
            <li className="nav-link">
              <Link to="/signout">Sign Out</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;