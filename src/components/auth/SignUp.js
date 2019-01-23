import React, { Component } from 'react';

class SignUp extends Component {

  state = {
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  }

  handleChange = (event) => {
    const { id, value } = event.target
    this.setState({
      [id]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('Sign Up Submit')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="SignIn">        
          <div className="input-field">
            <input placeholder="Email Address" id="email" type="email" value={this.state.email} onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <input placeholder="First Name" id="firstName" type="text" value={this.state.firstName} onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <input placeholder="Last Name" id="lastName" type="text" value={this.state.lastName} onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <input placeholder="Password" id="password" type="password" value={this.state.password} onChange={this.handleChange}/>
          </div>
      </form>
    )
  }
}

export default SignUp;