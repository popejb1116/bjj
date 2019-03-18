import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SignedOutLinks extends Component {
  render() {
    return (
      <li >
        <Link to="/signin" onClick={this.props.handleSidenavClose}>Sign In/Up</Link>
      </li>
    )
  }  
}

export default SignedOutLinks