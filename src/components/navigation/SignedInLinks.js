import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { AuthUserContext } from '../../contexts/AuthUserContext'


const SignedInLinks = () => {
   return (
      <Fragment>

         <li>
            <Link to="/signout">Sign Out</Link>
         </li>

         <AuthUserContext.Consumer>
            { context => (
               <li>
                  <Link to="/profile">
                     <div className="chip">{context.userProfile.firstName[0] + context.userProfile.lastName[0]}</div>
                  </Link>
               </li>
            )}
         </AuthUserContext.Consumer>

      </Fragment>
   )
}

const SignedInLinksMobile = props => {
   return (
      <Fragment>

         <li>
            <Link to="/signout" 
            onClick = {props.handleSidenavClose}>
            Sign Out
            </Link>
         </li>

         <AuthUserContext.Consumer>
            { context => (               
               <li>
                  <Link to="/profile" onClick = {props.handleSidenavClose}>
                     <div className="chip">                     
                        {context.userProfile.firstName[0] + context.userProfile.lastName[0]}
                     </div>
                  </Link>
               </li>
            )}
         </AuthUserContext.Consumer>

      </Fragment>

   )
}



export { SignedInLinks, SignedInLinksMobile }