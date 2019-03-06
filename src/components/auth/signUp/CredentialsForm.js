import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.div`
  
  color: white;
  background-color: transparent;
  padding: 5%;

  .form-header{
    text-align: center;
  }

  label {
     color: white;
  }

  input{
    color: white;
  }

  input:focus{
  color: #ff1744 !important;
  border-bottom: 1px solid #ff1744 !important;
  box-shadow: 0 1px 0 0 #ff1744 !important;
  font-size: 35px;
  }

  .form-nav {
    display: flex;
    justify-content: center;
  }

  .btn-large, .btn {
    background-color: transparent;

    .material-icons{
      font-size: 60px;
    }
  }

  .btn-large:hover, .btn:hover{
    color: white;
    background-color: #ff1744;
  }
`

const CredentialsForm = props => {
  return (
    <StyledForm>
      <form > 

        <div className="form-header">
          <h5>Great! Let's Get Your Authentication Info.</h5>
        </div>        

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

        <div className="form-nav">  
          <a
            className="btn-large z-depth-0"
            onClick={() => props.handleMode('profile')}>
            <i className="material-icons">arrow_right</i>
          </a>          
        </div>

        <a className="modal-close btn z-depth-0 right" href="/">Cancel</a>

      </form>
    </StyledForm>
  )
}

export default CredentialsForm