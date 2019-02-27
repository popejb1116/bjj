import React, { Component }from 'react';
import SignIn from './SignIn'
import SignUp from './SignUp'
//import firebase from '../../config/fbConfig'
//import { auth, firestore } from '../../config/fbConfig'

class Auth extends Component {

  render(){

    /* let errorElement = this.state.errorMessage ? 
    (
      <div className="error-container">
        <div className="auth-error">
          {this.state.errorMessage}
        </div> 
      </div>
    ) : (
      null
    ) */

    return (
      <div className="Auth">
        <div className="wrapper">
          <div className="form-container">

            <div className="box signin">
              <SignIn history={this.props.history} />
            </div>

            {/* <div className="box signup">
              <h3>Sign Up</h3>
              <SignUp formValues={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleError={this.handleError} />
            </div>
 */}
          </div>
        </div>
        {/*errorElement*/}
      </div>
    )
  }
}

export default Auth