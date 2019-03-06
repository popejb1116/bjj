import React, { Component, Fragment } from 'react';
import M from 'materialize-css'
import CrendentialsForm from './CredentialsForm'
import ProfileForm from './ProfileForm'
import ReviewAndSubmit from './ReviewAndSubmit'
import styled from 'styled-components'
import { auth } from '../../../config/fbConfig'

const StyledModal = styled.div`
  #signup-modal{
    background-color: rgb(0,0,0, 0.6);
  }
`

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

  componentDidMount(){
    const elems = document.getElementById('signup-modal')
    const options = {
      opacity: 0,
      dismissible: false
    }
    const instance = M.Modal.init(elems, options)
    instance.open()
  }

  componentWillUnmount(){
    const elems = document.getElementById('signup-modal')
    const instance = M.Modal.getInstance(elems)
    instance.destroy()
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
      console.log('Sign Up!!!!!!!!')
      this.props.history.push('/forum')
    })
    .catch(error => {
      console.log('Sign Up ERROR')
    })
  }

  render(){

  let determineDisplay = mode => {
    switch (mode) {
      case 'credentials': return <CrendentialsForm state={this.state} handleChange={this.handleChange} handleMode={this.handleMode} />
      case 'profile': return <ProfileForm state={this.state} handleChange={this.handleChange} handleMode={this.handleMode} />
      case 'review': return <ReviewAndSubmit state={this.state} handleSubmit={this.handleSubmit} />
      default: break
    }   
  }
  let display = determineDisplay(this.state.displayMode)
  //console.log(display)

    return (
      <StyledModal>
        <div id="signup-modal" className="modal z-depth-0">
          {display}
        </div>      
      </StyledModal>
    )
  }  
}

export default SignUp

//Ddblackcoffee1!