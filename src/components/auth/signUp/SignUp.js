import React, { Component, Fragment } from 'react';
import CrendentialsForm from './CredentialsForm'
import ProfileForm from './ProfileForm'
import ReviewAndSubmit from './ReviewAndSubmit'
import { auth } from '../../../config/fbConfig'

class SignUp extends Component {

  state = {    
    email: '',
    password: '',
    confirmPassword: '',

    firstName: '',
    lastName: '',
    primaryDiscipline: '',
    yearsExperience: '',
    additionalInfo: '',

    errorMessage: '',
    displayMode: 'credentials'
  }

  handleChange = event => {
    console.log(event.target)
    const { id, value, name } = event.target

    // RADIO BUTTON EVENT(S)
    if (name) {
      this.setState({
        [name]: id
      })
    } else {
      // TEXT INPUT EVENT(S)
      this.setState({
        [id]: value
      })
    }
    
  }

  handleMode = mode => {
    this.setState({
      displayMode: mode
    })
  }

  handleSubmit = event => {
    console.log('Submit')
    event.preventDefault()
    
    const { email, password } = this.state    
    auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      console.log(user)
      this.props.history.push('/forum')
    })
    .catch(error => {
      //console.log('Sign Up ERROR')
      this.handleError(error)
    })
  }

  handleError = error => {
    console.log(error.message)
  }

  render(){

  let determineDisplay = mode => {
    switch (mode) {
      case 'credentials': return <CrendentialsForm state={this.state} handleChange={this.handleChange} handleMode={this.handleMode} />
      case 'profile': return <ProfileForm state={this.state} handleChange={this.handleChange} handleMode={this.handleMode} />
      case 'review': return <ReviewAndSubmit state={this.state} handleMode={this.handleMode} handleSubmit={this.handleSubmit} />
      default: break
    }   
  }
  let display = determineDisplay(this.state.displayMode)

    return (
      <Fragment>
        {display}
      </Fragment>
    )
  }  
}

export default SignUp

//Ddblackcoffee1!