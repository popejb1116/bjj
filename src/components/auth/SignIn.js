import React from 'react';

const SignIn = (props) => {
  
  return (
    <form onSubmit={props.handleSubmit} id="SignIn">        
        <div className="input-field">
          <label htmlFor='email_SI'>Email Address</label>
          <input id="email_SI" type="email" value={props.formValues.email_SI} onChange={props.handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor='password_SI'>Password</label>
          <input id="password_SI" type="password" value={props.formValues.password_SI} onChange={props.handleChange}/>
        </div>
        <div className="center">
          <button className="btn-large z-depth-0">Sign In</button>
        </div> 
    </form>
  )
}


export default SignIn