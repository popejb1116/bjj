import React, { Component } from 'react';
import axios from 'axios'

class SignUp extends Component {

  state = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    errorMessage: ''
  }

  handleChange = (event) => {
    const { id, value } = event.target
    this.setState({
      [id]: value
    })
  }

  failureClearForm = (response) => {
    console.log('Clear Form')
    const errorMessage = response.data.error.message
    this.setState({
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      errorMessage: errorMessage
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('Sign Up Submit')
    event.preventDefault()
    console.log('Sign In Submit')
    axios({
      method: 'post',
      url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDK5eSRyiJB4rdbvuKL0Q53qSQx7zwOSLE',
      data: {
        email: this.state.email,
        password: this.state.password,
        returnSecureToken: true
      }
    })
    .then(res => {
      console.log('.then')
      console.log(res) 
    })
    .catch(err => {
      console.log('.catch')
      console.log(err.response)
      this.failureClearForm(err.response)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="SignIn">        
          <div className="input-field">
            <label htmlFor='email'>Email Address</label>
            <input id="email" type="email" value={this.state.email} onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor='firstName'>First Name</label>
            <input id="firstName" type="text" value={this.state.firstName} onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor='lastName'>Last Name</label>
            <input id="lastName" type="text" value={this.state.lastName} onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor='password'>Password</label>
            <input id="password" type="password" value={this.state.password} onChange={this.handleChange}/>
          </div>
          <div className="center">
            <button className="btn-large z-depth-0">Sign Up!</button>
          </div>
          <div className="err">{this.state.errorMessage}</div> 
      </form>
    )
  }
}

export default SignUp;