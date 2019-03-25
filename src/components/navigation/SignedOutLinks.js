import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const SignedOutLinks = () => {
   return (
      <li >
         <Link to="/signin">Sign In/Up</Link>
      </li>
   )
}

const SignedOutLinksMobile = props => {
   return (
      <li >
         <Link to="/signin" onClick={props.handleSidenavClose}>Sign In/Up</Link>
      </li>
   )
}

export { SignedOutLinks, SignedOutLinksMobile }