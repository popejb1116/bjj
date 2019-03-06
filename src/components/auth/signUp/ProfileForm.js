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

  label, input {
     color: white;
  }

  input:focus{
  color: #ff1744 !important;
  border-bottom: 1px solid #ff1744 !important;
  box-shadow: 0 1px 0 0 #ff1744 !important;
  font-size: 35px;
  }
`

const StyledRadioGroup = styled.div`

  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  background-color: transparent;
  font-size: 1rem;
  margin: 1rem;
  padding: 1rem;

  .radio-title{
    color: white;
    margin-right: 1rem;
    font-size: 1rem;
    min-width: 8rem;
  }

  .radio-option{
    min-width: 6rem;

    [type="radio"]:not(:checked)+span{
    color: white;
    padding-left: 25px;
    margin-right: 25px;
    }

    [type="radio"]:checked+span{
      color: white;
      padding-left: 25px;
      margin-right: 25px;
    }

    [type="radio"]:checked+span:after{
      background-color: #ff1744;
      border: 2px;
      border-color: #ff1744;
    }
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

const ProfileForm = props => {
  return (
    <Fragment>
      <form > 

        <StyledModalHeader>
          Now Your Profile And Martial Arts History...  
        </StyledModalHeader>      

        <StyledModalTextFieldsBlock>
          <div className="input-field">
            <label htmlFor='firstName'>First Name</label>
            <input id="firstName" type="text" value={props.state.firstName} onChange={props.handleChange}/>
          </div>
          
          <div className="input-field">
            <label htmlFor='lastName'>Last Name</label>
            <input id="lastName" type="text" value={props.state.lastName} onChange={props.handleChange}/>
          </div>    
        </StyledModalTextFieldsBlock>        
        
        <StyledRadioGroup>
          <div className="radio-title">Primary</div>
          
          <label className="radio-option" htmlFor="bjj">
            <input name="primaryDiscipline" id="bjj" type="radio" onChange={props.handleChange} />
            <span>BJJ</span>
          </label>
          
          <label className="radio-option" htmlFor="judo">
            <input name="primaryDiscipline" id="judo" type="radio" onChange={props.handleChange} />
            <span>Judo</span>
          </label>

          <label className="radio-option" htmlFor="muay">
            <input name="primaryDiscipline" id="muay" type="radio" onChange={props.handleChange} />
            <span>Muay Thai</span>
          </label>        

          <label className="radio-option" htmlFor="other">
            <input name="primaryDiscipline" id="other" type="radio" onChange={props.handleChange} />
            <span>Other</span>
          </label>                
        </StyledRadioGroup>

        <StyledRadioGroup>
          <div className="radio-title">Years Experience</div>

          <label className="radio-option" htmlFor="zeroFour">
            <input name="yearsExperience" id="zeroFour" type="radio" value={props.state.yearsExperience} onChange={props.handleChange} />
            <span>0-4</span>
          </label>
          
          <label className="radio-option" htmlFor="fiveNine">
            <input name="yearsExperience" id="fiveNine" type="radio" value={props.state.yearsExperience} onChange={props.handleChange} />
            <span>5-9</span>
          </label>

          <label className="radio-option" htmlFor="tenPlus">
            <input name="yearsExperience" id="tenPlus" type="radio" value={props.state.yearsExperience} onChange={props.handleChange} />
            <span>10+</span>
          </label>
        </StyledRadioGroup>

        <StyledModalNav>
          <a className="btn-large z-depth-0" onClick={() => props.handleMode('credentials')}>Go Back</a>
          <a className="btn-large z-depth-0" onClick={() => props.handleMode('review')}>Onward</a>
        </StyledModalNav>

        <StyledModalFooter>
        <a 
          className="modal-close btn z-depth-0"
          href="/signin"
        >Cancel
        </a>
      </StyledModalFooter>

      </form>
    </Fragment>
  )
}

export default ProfileForm

