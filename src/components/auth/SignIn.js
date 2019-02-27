import React from 'react'
import { auth } from '../../config/fbConfig'
//import M from 'materialize-css'

class SignIn extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    const { id, value } = event.target
    this.setState({
      [id]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { email, password } = this.state    
    auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log(user)
      this.props.history.push('/forum')
    })
    .catch(error => {
      this.handleError(error)
    })
  }

  handleError = error => {
    console.log(error.message)
    
    /* var toastHTML = 
      '<span>I am toast content</span>' +
      '<button className="btn-flat toast-action onClick={this.dismissToast}">Dismiss</button>';
    M.toast({html: toastHTML}); */
    
    this.setState({
      email: '',
      password: ''
    })
  }

  dismissToast(){
    console.log('dismiss toast')
  }

  render(){

    return (
      <form className="signin-form" onSubmit={this.handleSubmit} id="SignIn">        
          <div className="input-field">
            <label htmlFor='email'>Email Address</label>
            <input id="email" type="email" value={this.state.email} onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor='password'>Password</label>
            <input id="password" type="password" value={this.state.password} onChange={this.handleChange}/>
          </div>
          <div className="center">
            <button className="btn-large z-depth-0">Sign In</button>
          </div>

          <div className="signup-block">
            <div className="signup-message">Don't have an account?</div>
            <div className="btn z-depth-0">Sign Up</div>
          </div>          
      </form>
    )
  }
  
}


export default SignIn