import React, { Fragment } from 'react'
import { Form, FormHeader, FormBody, FormFooter, FormBodyAnchor, FormButton, FormCancel } from '../StyledComponents'

const CredentialsForm = props => {

  const {email, password, confirmPassword} = props.state

  let focusEmailLabel, focusPasswordLabel, focusConfirmLabel
  if (email !== '') {
    focusEmailLabel = "active"
  }
  if (password !== '') {
    focusPasswordLabel = "active"
  }
  if (confirmPassword !== '') {
    focusConfirmLabel = "active"
  }

  return (
    <Fragment>
      <Form>

        <FormHeader>Great! Let's Get Your Authentication Info.</FormHeader>

        <FormBody>
            <div className="input-field">
              <label 
                htmlFor='email' 
                className={focusEmailLabel}
                >Email Address
              </label>
              <input 
                id="email" 
                type="email" 
                value={email} 
                onChange={props.handleChange}
              />
            </div>         

            <div className="input-field">
              <label htmlFor='password' className={focusPasswordLabel}>Password</label>
              <input id="password" type="password" value={password} onChange={props.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor='confirmPassword' className={focusConfirmLabel}>Confirm Password</label>
              <input id="confirmPassword" type="password" value={confirmPassword} onChange={props.handleChange}/>
            </div>

            <FormBodyAnchor>
               <FormButton>
                  <button className="btn-large z-depth-0" onClick={() => props.handleMode('profile')}>Onward</button>                  
               </FormButton>
            </FormBodyAnchor>
        </FormBody>

        <FormFooter>
          <FormCancel>
            <a className="btn z-depth-0" href="/signin">Cancel</a>
          </FormCancel>       
        </FormFooter>

      </Form>
    </Fragment>
  )
}

export default CredentialsForm