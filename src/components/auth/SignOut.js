import React from 'react'
import { auth } from '../../config/fbConfig'

const SignOut = props => {

  auth.signOut()
    .then(() => {
      props.history.push('/')
    })
    .catch(err => {
      console.log('SignOut Error')
      console.log(err.message)
    })

    return (<div></div>)
}

export default SignOut