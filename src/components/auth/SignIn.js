import React, { Component } from 'react';

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

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('Sign In Submit')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="SignIn">        
          <div className="input-field">
            <input placeholder="Email Address" id="emailSignIn" type="email" value={this.state.emailSignIn} onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <input placeholder="Password" id="passwordSignIn" type="password" value={this.state.passwordSignIn} onChange={this.handleChange}/>
          </div>
      </form>
    )
  }
}

export default SignIn;