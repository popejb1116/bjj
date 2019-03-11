import React, { Component, Fragment } from 'react';
import CrendentialsForm from './CredentialsForm'
import ProfileForm from './ProfileForm'
import ReviewAndSubmit from './ReviewAndSubmit'
import { auth, firestore } from '../../../config/fbConfig'
import M from 'materialize-css'
import { StyledErrorModal } from '../StyledComponents'

class SignUp extends Component {

  state = {    
    email: '',
    password: '',
    confirmPassword: '',

    firstName: '',
    lastName: '',
    primaryDiscipline: '',
    yearsExperience: '',

    displayMode: 'credentials',
    errorMessage: '',
  }

  componentDidMount(){
    // INIT MODAL
    const elem = document.getElementById('error-modal')
    const options = {
      opacity: 0
    }
    M.Modal.init(elem, options)
  }

  componentWillUnmount(){
    const elem = document.getElementById('error-modal')
    const instance = M.Modal.getInstance(elem)
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
    // TODO - CHECK FIELDS AS NON-EMPTY
    this.setState({
      displayMode: mode
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    
    const { email, password } = this.state    
    auth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      // AGGREGATE USER PROFILE DATA FOR .SET()
      const { uid } = res.user
      const userProfile = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        primaryDiscipline: this.state.primaryDiscipline,
        yearsExperience: this.state.yearsExperience,
        createdAt: new Date()
      }          
      // THIS IS RETURNED TO THE OUTER PROMISE AND PICKS UP AT THE NEXT .THEN
      return firestore.collection('users').doc(uid).set(userProfile)
    })
    .then(() => {
      this.props.history.push('/forum')
    })
    .catch(error => {
      this.setState({
        email: '',
        password: '',
        confirmPassword: '',

        firstName: '',
        lastName: '',
        primaryDiscipline: '',
        yearsExperience: '',

        displayMode: 'credentials',
        errorMessage: error.message
      },
      () =>{
        const elem = document.getElementById('error-modal')
        const instance = M.Modal.getInstance(elem)
        instance.open()
      })
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
        <StyledErrorModal>
          <div id="error-modal" className="modal">
            <div className="modal-content">
              {this.state.errorMessage}
              <a className="modal-close btn-flat">Close</a>
            </div>
          </div>
        </StyledErrorModal>

        {display}
      </Fragment>
    )
  }  
}

export default SignUp