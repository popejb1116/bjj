import React, { Component, Fragment }from 'react';
import SignIn from './SignIn'
//import SignUp from './SignUp'
import SU from './SU'

class Auth extends Component {

  state = {
    errorMessage: '',
    displayMode: 'signin'
  }

  handleError = error => {
    this.setState({
      errorMessage: error.message
    })
  }

  handleDisplayMode = mode => {
    console.log(mode)
    this.setState({
      displayMode: mode
    })
  }

  render(){

    let display = this.state.displayMode === 'signin' ? 
    (
      <div className="Auth">
        <div className="wrapper">
          <div className="form-container">
            <div className="box signin">
              <SignIn 
                history={this.props.history} 
                handleDisplayMode={mode => {this.handleDisplayMode(mode)}}/>
            </div>
          </div>
        </div>
      </div>
    ) 
    : 
    (
      <SU />
    )

    return (
      <Fragment>
        {display}
      </Fragment>
    )
  }
}

export default Auth