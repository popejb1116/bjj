import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const style = {
  redText: 'red-text text-accent-3'
}

class SignedInLinks extends Component {
  render() {
    //console.log('signed IN links hit')
    return (
      <li className="nav-link">
        <Link to="/signout" className={style.redText}>Sign Out</Link>
      </li>
    )
  }
}

export default SignedInLinks