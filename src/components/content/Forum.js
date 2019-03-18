import React, { Component } from 'react'
import { auth } from '../../config/fbConfig'

class Forum extends Component {

  state = {
    signedIn: false
  }

  componentDidMount(){
    let unsubscribe = auth.onAuthStateChanged(user => {
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
    
    // THIS UNSUBSCRIBES FROM ASYNC EVENTS WHICH UPDATE AFTER A COMPONENT UNMOUNTS
    unsubscribe()

    //INIT MOBILE
  }

  componentWillUnmount(){

  }

  render(){
    let conditionalContent = this.state.signedIn ? (
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