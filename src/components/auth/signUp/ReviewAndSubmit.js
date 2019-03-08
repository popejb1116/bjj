import React, { Fragment } from 'react';
import { Form, FormHeader, FormBody, FormFooter, FormNavAndAction, FormCancel} from '../StyledComponents'


const ReviewAndSubmit = props => {
  return (
    <Fragment>
      <Form>

        <FormHeader>
          Does All This Look Correct?
        </FormHeader>
        
        <FormBody>
          <p>First Name : {props.state.firstName}</p>
          <p>Last Name : {props.state.lastName}</p>
          <p>Email : {props.state.email}</p>
          <p>Primary Discipline : {props.state.primaryDiscipline}</p>
          <p>Years Of Experience : {props.state.yearsExperience}</p>
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