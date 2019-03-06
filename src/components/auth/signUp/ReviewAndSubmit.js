import React from 'react';
import styled from 'styled-components'

const StyledReview = styled.div`
  color: white;
  background-color: transparent;
  font-size: 1.5rem;
  padding: 1.5rem;
`

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: center;
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
  font-size: 1.25rem;
  margin: 1rem;
  padding: 1rem;
`

const StyledButton = styled.div`
  display: flex;
  justify-content: center;

  .btn-large {
    color: white;
    background-color: transparent;
  }

  .btn-large:hover{
    background-color: #ff1744;
  }
`

const ReviewAndSubmit = props => {
  return (
    <StyledReview>
      
      <StyledModalHeader>
        <p>Does All This Look Correct?</p>
      </StyledModalHeader>
      
      <StyledModalTextFieldsBlock>
        <p>First Name: {props.state.firstName}</p>
        <p>Last Name: {props.state.lastName}</p>
        <p>Email: {props.state.email}</p>
        <p>Primary Discipline: {props.state.primaryDiscipline}</p>
        <p>Years Of Experience: {props.state.yearsExperience}</p>
      </StyledModalTextFieldsBlock>

      <StyledButton>
        <a 
          className="btn-large z-depth-0"
          onClick={props.handleSubmit}
          >Submit
        </a>
      </StyledButton>

    </StyledReview>
  )
}

export default ReviewAndSubmit