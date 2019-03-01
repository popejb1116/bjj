import React, {Fragment} from 'react'
import { auth } from '../../config/fbConfig'

class SignIn extends React.Component {

  state = {
    email: '',
    password: '',
    errorMessage: ''
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
      // HANDLE ERROR
      this.handleError(error)
    })
  }

  handleError = error => {
    this.setState({
      email: '',
      password: '',
      errorMessage: error.message
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
      <Fragment>
        {errorElement}
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
              <div 
                className="btn z-depth-0" 
                onClick={() => this.props.handleDisplayMode('signup')}>
                Sign Up
              </div>
            </div>          
        </form>
      </Fragment>
    )
  }
  
}


export default SignIn