import React, { Fragment } from 'react';
import { Form, FormHeader, FormBody, FormFooter, FormNavAndAction, FormCancel} from '../StyledComponents'


const ReviewAndSubmit = props => {
  let {firstName, lastName, email, primaryDiscipline, yearsExperience} = props.state
  
  return (
    <Fragment>
      <Form>

        <FormHeader>
          Does All This Look Correct?
        </FormHeader>
        
        <FormBody>
          <p>First Name : {firstName}</p>
          <p>Last Name : {lastName}</p>
          <p>Email : {email}</p>
          <p>Primary Discipline : {primaryDiscipline}</p>
          <p>Years Of Experience : {yearsExperience}</p>
        </FormBody>

        <FormFooter>
          <FormNavAndAction>
            <a className="btn-large z-depth-0" onClick={() => props.handleMode('profile')}>Nope??</a>
            <a className="btn-large z-depth-0" onClick={props.handleSubmit}>Submit</a>        
          </FormNavAndAction>      

          <FormCancel>
            <a 
              className="modal-close btn z-depth-0"
              href="/signin"
              >Cancel
            </a>
          </FormCancel>
        </FormFooter>

      </Form>
    </Fragment>
  )
}

export default ReviewAndSubmit