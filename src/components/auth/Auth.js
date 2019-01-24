import React from 'react';
import SignIn from './SignIn'
import SignUp from './SignUp'

const Auth = () => {
  return (
    <div className="Auth">
      <div className="wrapper">
        <div className="flex-container">
          <div className="box signin">
            <h3>Sign In</h3>          
            <SignIn />
          </div>
          <div className="box signup">
            <h3>Sign Up</h3>
            <SignUp />
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Auth;