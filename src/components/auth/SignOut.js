import React from 'react'
import firebase from '../../config/fbConfig'

const SignOut = props => {

  firebase.auth().signOut()
    .then(() => {
      props.history.push('/')
    })
    .catch(err => {
      console.log('SignOut Error')
      console.log(err)
    })

    return (<div></div>)
}

export default SignOut