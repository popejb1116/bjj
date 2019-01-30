import React, { Component }from 'react';
import SignIn from './SignIn'
import SignUp from './SignUp'
import firebase from '../../config/fbConfig'

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

  componentDidMount(){
    console.log('/Auth cdm')
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('user logged in')
      } else {
        console.log('user NOT logged in')
      }
    })
  }

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
      case 'SignIn':
        firebase.auth().signInWithEmailAndPassword(
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

      case 'SignUp':
        firebase.auth().createUserWithEmailAndPassword(
          this.state.email_SU,
          this.state.password_SU
        )
        .then(() => {
          this.props.history.push('/forum')
        })
        .catch(err => {
          this.handleErrorAndClearForm(err.message)
        })
        break
    
      default:
        let defaultError = 'Error not related to Firebase Auth'
        this.handleErrorAndClearForm(defaultError)
        break
    }
  }

  handleErrorAndClearForm = (error) => {
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

    console.log('Auth render')

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