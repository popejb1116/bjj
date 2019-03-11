import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SignedInLinks extends Component {
  render() {
    return (
      <li>
        <Link to="/signout">Sign Out</Link>
      </li>
    )
  }
}

export default SignedInLinks