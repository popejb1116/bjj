import React, { Fragment } from 'react';
import styled from 'styled-components'

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 2rem 0 2rem;
  color: white;
  background-color: transparent;
  font-size: 2rem;
`

const StyledModalTextFieldsBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: white;
  background-color: transparent;
  font-size: 1rem;
  margin: 1rem;
  padding: 1rem;
`

const StyledModalNav = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  .btn-large {
    color: white;
    background-color: transparent;
    margin: 0rem 0.5rem;
    font-weight: bold;
  }

  .btn-large:hover{
    background-color: #ff1744;
    margin: 0rem 0.5rem;
    font-weight: bold;
  }
`

const StyledModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  
  .btn {
    color: white;
    background-color: transparent;
  }

  .btn:hover{
    background-color: #ff1744;
  }
`

const ReviewAndSubmit = props => {
  return (
    <Fragment>
      
      <StyledModalHeader>
        Does All This Look Correct?
      </StyledModalHeader>
      
      <StyledModalTextFieldsBlock>
        <p>First Name : {props.state.firstName}</p>
        <p>Last Name : {props.state.lastName}</p>
        <p>Email : {props.state.email}</p>
        <p>Primary Discipline : {props.state.primaryDiscipline}</p>
        <p>Years Of Experience : {props.state.yearsExperience}</p>
      </StyledModalTextFieldsBlock>

      <StyledModalNav>
        <a className="btn-large z-depth-0" onClick={() => props.handleMode('profile')}>Nope??</a>
        <a className="btn-large z-depth-0" onClick={props.handleSubmit}>Submit</a>        
      </StyledModalNav>      

      <StyledModalFooter>
        <a 
          className="modal-close btn z-depth-0"
          href="/signin"
        >Cancel
        </a>
      </StyledModalFooter>

    </Fragment>
  )
}

export default ReviewAndSubmit