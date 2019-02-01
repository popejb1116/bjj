import React, { Component }from 'react';
import SignIn from './SignIn'
import SignUp from './SignUp'
//import firebase from '../../config/fbConfig'
import { auth, firestore } from '../../config/fbConfig'

class Auth extends Component {

  state = {
    email_SI: '',
    password_SI: '',

    email_SU: '',
    firstName: '',
    lastName: '',
    password_SU: '',

    errorMessage: ''
  }

  /* componentDidMount(){
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log('Auth cdm: user')
      } else {
        console.log('Auth cdm: NO user')
      }
    })
  } */

  handleChange = (event) => {
    const { id, value } = event.target
    this.setState({
      [id]: value
    })
  }

  handleSubmit = (event) => {

    event.preventDefault()
    let { id } = event.target

    switch (id) {

      // Handle user sign in
      case 'SignIn':
        auth.signInWithEmailAndPassword(
          this.state.email_SI,
          this.state.password_SI
        )
        .then(() => {
          this.props.history.push('/forum')
        })
        .catch(err => {
          this.handleErrorAndClearForm(err.message)
        })
        break

      // Handle user sign up, add profile to users collection
      case 'SignUp':
        auth.createUserWithEmailAndPassword(
          this.state.email_SU,
          this.state.password_SU
        )
        .then(res => {
          // aggregate user profile data for .set()
          const { uid } = res.user
          const userProfile = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            createdAt: new Date()
          }          
          // This is returned to the outer Promise and picks up at the next .then
          return firestore.collection('users').doc(uid).set(userProfile)
        })
        .then(() => {
          //console.log('New user profile added')
          this.props.history.push('/forum')
        })
        .catch(err => {
          this.handleErrorAndClearForm(err.message)
        })
        break
    
      default:
        const defaultError = 'Non-Firebase Error'
        this.handleErrorAndClearForm(defaultError)
        break
    }
  }

  handleErrorAndClearForm = error => {
    this.setState({
      email_SI: '',
      password_SI: '',

      email_SU: '',
      firstName: '',
      lastName: '',
      password_SU: '',

      errorMessage: error
    })
  }

  render(){

    let errorElement = this.state.errorMessage ? 
    (
      <div className="error-container">
        <div className="auth-error">
          {this.state.errorMessage}
        </div> 
      </div>
    ) : (
      null
    )

    return (
      <div className="Auth">
        <div className="wrapper">
          <div className="form-container">

            <div className="box signin">
              <h3>Sign In</h3>          
              <SignIn formValues={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleError={this.handleError} />
            </div>

            <div className="box signup">
              <h3>Sign Up</h3>
              <SignUp formValues={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleError={this.handleError} />
            </div>

          </div>
        </div>
        {errorElement}
      </div>
    )
  }
}

export default Auth