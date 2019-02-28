import React, { Component }from 'react';
import SignIn from './SignIn'
import SignUp from './SignUp'

class Auth extends Component {

  state = {
    errorMessage: ''
  }

  handleError = error => {
    this.setState({
      errorMessage: error.message
    })
  }

  render(){

    return (
      <div className="Auth">
        <div className="wrapper">
          <div className="form-container">

            <div className="box signin">
              <SignIn history={this.props.history} handleError={(error) => {this.handleError(error)}}/>
            </div>

            {/* <div className="box signup">
              <h3>Sign Up</h3>
              <SignUp formValues={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleError={this.handleError} />
            </div>
 */}
          </div>
        </div>
        
      </div>
    )
  }
}

export default Auth