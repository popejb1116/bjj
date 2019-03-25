import React, { Component } from 'react'
import { auth, firestore } from '../config/fbConfig'

const AuthUserContext = React.createContext()

class AuthUserProvider extends Component {

   authListenerUnsubscribe = null
   documentListenerUnsubscribe = null

   state = {
      authUser: null,
      userProfile: null
   }

   componentDidMount(){

      /* THIS CONTEXT CONTAINS LISTENERS FOR USER AUTH STATUS 
      AND THE REALTED USER PROFILE DOCUMENT OF A USER WHICH IS CURRENTLY SIGNED IN */

      this.authListenerUnsubscribe = auth.onAuthStateChanged( authUser => {
         if (authUser) {            
            this.documentListenerUnsubscribe = firestore.collection('users').doc(auth.currentUser.uid).onSnapshot( doc => {
               this.setState({
                  authUser: authUser,
                  userProfile: doc.data()
               })
            })
         } else {
            this.setState({
               authUser: null,
               userProfile: null
            })  
         }
      })
   }

   componentWillUnmount(){
      this.authListenerUnsubscribe()
      this.documentListenerUnsubscribe()
   }

   render() {
      return (
         <AuthUserContext.Provider value = {{
            authUser: this.state.authUser,
            userProfile: this.state.userProfile
         }}>
            {this.props.children}
         </AuthUserContext.Provider>
      )
   }
}

export { AuthUserProvider, AuthUserContext }