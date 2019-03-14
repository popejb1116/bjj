import React, { Fragment } from 'react';
import { Form, FormHeader, FormBody, FormFooter, FormBodyAnchor, FormButton, FormCancel } from '../StyledComponents'


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

          <FormBodyAnchor>
             <FormButton>
               <button className="btn-large z-depth-0" onClick={() => props.handleMode('profile')}>Nope??</button>
               <button className="btn-large z-depth-0" onClick={props.handleSubmit}>Submit</button> 
             </FormButton>
          </FormBodyAnchor>
        </FormBody>

        <FormFooter>
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