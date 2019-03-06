import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.div`
  color: white;
  background-color: transparent;
  padding: 5%;

  .form-header{
    text-align: center;
  }

  label, input {
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
    margin-top: 1.5rem;
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

const StyledRadio = styled.div`

  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.5rem;

  .radio-title{
    margin-right: 10px;
  }

  [type="radio"]:not(:checked)+span{
    padding-left: 25px;
    margin-right: 25px;
  }

  [type="radio"]:checked+span{
    padding-left: 25px;
    margin-right: 25px;
  }

  [type="radio"]:checked+span:after{
    background-color: #ff1744;
    border: 2px;
    border-color: #ff1744;
  }
`

const ProfileForm = props => {
  return (
    <StyledForm>
      <form > 

        <div className="form-header">
          <h5>Now Your Profile And Martial Arts History...</h5>
        </div>        

        <div className="input-field">
          <label htmlFor='firstName'>First Name</label>
          <input id="firstName" type="text" value={props.state.firstName} onChange={props.handleChange}/>
        </div>
        
        <div className="input-field">
          <label htmlFor='lastName'>Last Name</label>
          <input id="lastName" type="text" value={props.state.lastName} onChange={props.handleChange}/>
        </div>    
        
        <StyledRadio>
          <div className="radio-title">Primary Discipline</div>
          <label htmlFor="bjj">
            <input name="primaryDiscipline" id="bjj" type="radio" onChange={props.handleChange} />
            <span>BJJ</span>
          </label>
          
          <label htmlFor="judo">
            <input name="primaryDiscipline" id="judo" type="radio" onChange={props.handleChange} />
            <span>Judo</span>
          </label>

          <label htmlFor="muay">
            <input name="primaryDiscipline" id="muay" type="radio" onChange={props.handleChange} />
            <span>Muay Thai</span>
          </label>        

          <label htmlFor="other">
            <input name="primaryDiscipline" id="other" type="radio" onChange={props.handleChange} />
            <span>Other</span>
          </label>                
        </StyledRadio>

        <StyledRadio>
          <div className="radio-title">Years Experience</div>
          <label htmlFor="zeroFour">
            <input name="yearsExperience" id="zeroFour" type="radio" value={props.state.yearsExperience} onChange={props.handleChange} />
            <span>0-4</span>
          </label>
          
          <label htmlFor="fiveNine">
            <input name="yearsExperience" id="fiveNine" type="radio" value={props.state.yearsExperience} onChange={props.handleChange} />
            <span>5-9</span>
          </label>

          <label htmlFor="tenPlus">
            <input name="yearsExperience" id="tenPlus" type="radio" value={props.state.yearsExperience} onChange={props.handleChange} />
            <span>10+</span>
          </label>                   
        </StyledRadio>

        <div className="form-nav">
          <a 
            className="btn-large z-depth-0"
            onClick={() => props.handleMode('credentials')}>
            <i className="material-icons">arrow_left</i>
          </a>      
          <a
            className="btn-large z-depth-0"
            onClick={() => props.handleMode('review')}>
            <i className="material-icons">arrow_right</i>
          </a>          
        </div>

        <a className="modal-close btn z-depth-0 right" href="/">Cancel</a>

      </form>
    </StyledForm>
  )
}

export default ProfileForm

