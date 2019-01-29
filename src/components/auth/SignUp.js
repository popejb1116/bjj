import React from 'react';

const SignUp = (props) => {
  
  return (
    <form onSubmit={props.handleSubmit} id="SignUp">        
        <div className="input-field">
          <label htmlFor='email_SU'>Email Address</label>
          <input id="email_SU" type="email" value={props.formValues.email_SU} onChange={props.handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor='firstName'>First Name</label>
          <input id="firstName" type="text" value={props.formValues.firstName} onChange={props.handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor='lastName'>Last Name</label>
          <input id="lastName" type="text" value={props.formValues.lastName} onChange={props.handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor='password_SU'>Password</label>
          <input id="password_SU" type="password" value={props.formValues.password_SU} onChange={props.handleChange}/>
        </div>
        <div className="center">
          <button className="btn-large z-depth-0">Sign Up!</button>
        </div>
    </form>
  )
}

export default SignUp