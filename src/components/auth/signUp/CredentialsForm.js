import React, { Fragment } from 'react'
import { Form, FormHeader, FormBody, FormFooter, FormNavAndAction, FormCancel} from '../StyledComponents'

const CredentialsForm = props => {
  return (
    <Fragment>
      <Form>

        <FormHeader>
          Great! Let's Get Your Authentication Info.
        </FormHeader>

        <FormBody>
          <form>
            <div className="input-field">
              <label htmlFor='email'>Email Address</label>
              <input id="email" type="email" value={props.state.email} onChange={props.handleChange}/>
            </div>          
            <div className="input-field">
              <label htmlFor='password'>Password</label>
              <input id="password" type="password" value={props.state.password} onChange={props.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input id="confirmPassword" type="password" value={props.state.confirmPassword} onChange={props.handleChange}/>
            </div>
          </form>
        </FormBody>

        <FormFooter> 
          <FormNavAndAction>
            <a className="btn-large z-depth-0" onClick={() => props.handleMode('profile')}>Onward</a>
          </FormNavAndAction>   
          <FormCancel>
            <a className="btn z-depth-0" href="/signin">Cancel</a>
          </FormCancel>       
        </FormFooter>

      </Form>      
    </Fragment>
  )
}

export default CredentialsForm