import React, { Fragment } from 'react'
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

  input, label{
    color: white;
  }

  input:focus{
  color: #ff1744 !important;
  border-bottom: 1px solid #ff1744 !important;
  box-shadow: 0 1px 0 0 #ff1744 !important;
  font-size: 2rem;
  }
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

const CredentialsForm = props => {
  return (
    <Fragment>
      <form > 

        <StyledModalHeader>
        Great! Let's Get Your Authentication Info.
        </StyledModalHeader>      

        <StyledModalTextFieldsBlock>
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
        </StyledModalTextFieldsBlock>

      </form>

      <StyledModalNav>            
          <a className="btn-large z-depth-0" onClick={() => props.handleMode('profile')}>Onward</a>
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

export default CredentialsForm