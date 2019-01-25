import React, { Component } from 'react';
import axios from 'axios'

class SignIn extends Component {

  state = { 
    emailSignIn: '',
    passwordSignIn: ''
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
    this.props.handleError(errorMessage)
    //console.log(errorMessage)
    this.setState({
      emailSignIn: '',
      passwordSignIn: ''
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('Sign In Submit')
    axios({
      method: 'post',
      url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDK5eSRyiJB4rdbvuKL0Q53qSQx7zwOSLE',
      data: {
        email: this.state.emailSignIn,
        password: this.state.passwordSignIn,
        returnSecureToken: true
      }
    })
    .then(res => {
      console.log('.then')
      console.log(res) 
    })
    .catch(err => {
      console.log('.catch')
      this.failureClearForm(err.response)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="SignIn">        
          <div className="input-field">
            <label htmlFor='emailSignIn'>Email Address</label>
            <input id="emailSignIn" type="email" value={this.state.emailSignIn} onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor='passwordSignIn'>Password</label>
            <input id="passwordSignIn" type="password" value={this.state.passwordSignIn} onChange={this.handleChange}/>
          </div>
          <div className="center">
            <button className="btn-large z-depth-0">Sign In</button>
          </div> 
          <div className="err">{this.state.errorMessage}</div>
      </form>
    )
  }
}

export default SignIn