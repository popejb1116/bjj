import React, { Component }from 'react';
import SignIn from './SignIn'
import SignUp from './SignUp'



class Auth extends Component {

  state = {
    errorMessage: ''
  }

  handleError = (error) => {
    this.setState({
      errorMessage: error
    })
  }

  render(){
    return (
      <div className="Auth">
        <div className="wrapper">
          <div className="form-container">
            <div className="box signin">
              <h3>Sign In</h3>          
              <SignIn handleError={this.handleError}/>
            </div>
            <div className="box signup">
              <h3>Sign Up</h3>
              <SignUp />
            </div>
          </div>
        </div>    
        
        <div className="error-container">
          <div className="auth-error">
            {this.state.errorMessage}
          </div> 
        </div>
        
      </div>
    )
  }
}

export default Auth