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
    
    // this unsubscribes from async events which update after a component unmounts
    unsubscribe()
  }

  render(){
    let conditionalContent = this.state.signedIn ? (
      <div>
        <h1>Dat special shit</h1>
      </div>
    ) : (
      <div>
        <h1>Please Sign In or Sign Up to view the forum</h1>
      </div>
    )

    return (
      <div>
        {conditionalContent}
      </div>
    )
  }
  
}

export default Forum