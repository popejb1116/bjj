import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const style = {
  redText: 'red-text text-accent-3'
}

class SignedOutLinks extends Component {
  render() {
    console.log('signed OUT links hit')
    return (
      <li className="nav-link">
        <Link to="/auth" className={style.redText}>Sign In/Up</Link>
      </li>
    )
  }  
}

export default SignedOutLinks