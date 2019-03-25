import React, { Component } from 'react'
//import { auth } from '../../config/fbConfig'
import { AuthUserContext } from '../../contexts/AuthUserContext'

class Forum extends Component {

   static contextType = AuthUserContext

 /*  state = {
    signedIn: false
  } */

  componentDidMount(){
  
  }

  componentWillUnmount(){

  }

  render(){

    let conditionalContent = this.context.authUser ? (
      <h1>Dat special shit</h1>
    ) : (
      <h1>Please Sign In or Sign Up to view the forum</h1>
    )

    return (
      <div className="Forum">
        {conditionalContent}
      </div>
    )
  }
  
}

export default Forum