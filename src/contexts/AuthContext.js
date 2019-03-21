import React, { Component } from 'react'
import { auth } from '../config/fbConfig'

const AuthContext = React.createContext()

class AuthProvider extends Component {

   firestoreUnsubscribe = null

   state = {
      user: null
   }

   componentDidMount(){
      this.firestoreUnsubscribe = auth.onAuthStateChanged( user => {
         if (user) {
            this.setState({user: user})
         } else {
            this.setState({user: null})  
         }
      })
   }

   componentWillUnmount(){
      this.firestoreUnsubscribe()
   }

   render() {
      return (
         <AuthContext.Provider value = {{
            user: this.state.user
         }}>
            {this.props.children}
         </AuthContext.Provider>
      )
   }

}

export { AuthProvider, AuthContext }