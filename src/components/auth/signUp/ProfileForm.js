import React, { Fragment } from 'react'
import { RadioGroup, RadioTitle, RadioOptions} from '../StyledComponents'
import { Form, FormHeader, FormBody, FormFooter, FormBodyAnchor, FormButton, FormCancel } from '../StyledComponents'

const ProfileForm = props => {

  const { firstName, lastName, primaryDiscipline, yearsExperience } = props.state
  let focusFirstNameLabel, focusLastNameLabel

  if (firstName !== "") {
    focusFirstNameLabel = "active"
  }
  if (lastName !== "") {
    focusLastNameLabel = "active"
  }

  return (
    <Fragment>
      <Form>
        <FormHeader>
          Now Your Profile And Martial Arts History...  
        </FormHeader>

        <FormBody>
          
            <div className="input-field">
              <label htmlFor='firstName' className={focusFirstNameLabel}>First Name</label>
              <input id="firstName" type="text" value={firstName} onChange={props.handleChange}/>
            </div>
            
            <div className="input-field">
              <label htmlFor='lastName' className={focusLastNameLabel}>Last Name</label>
              <input id="lastName" type="text" value={lastName} onChange={props.handleChange}/>
            </div>

            <RadioGroup>
              <RadioTitle>Primary Discipline</RadioTitle>
              <RadioOptions>
                <label className="radio-option" htmlFor="BJJ">
                  <input 
                    name="primaryDiscipline" 
                    id="BJJ" 
                    type="radio" 
                    onChange={props.handleChange} 
                    checked={primaryDiscipline === 'BJJ' ? (true) : (false)} />
                  <span>BJJ</span>
                </label>
                
                <label className="radio-option" htmlFor="Judo">
                  <input 
                    name="primaryDiscipline" 
                    id="Judo" 
                    type="radio" 
                    onChange={props.handleChange}
                    checked={primaryDiscipline === "Judo" ? (true) : (false)} />
                  <span>Judo</span>
                </label>

                <label className="radio-option" htmlFor="Muay Thai">
                  <input 
                    name="primaryDiscipline" 
                    id="Muay Thai" 
                    type="radio" 
                    onChange={props.handleChange}
                    checked={primaryDiscipline === "Muay Thai" ? (true) : (false)} />
                  <span>Muay Thai</span>
                </label>        

                <label className="radio-option" htmlFor="Other">
                  <input 
                    name="primaryDiscipline" 
                    id="Other" 
                    type="radio" 
                    onChange={props.handleChange} 
                    checked={primaryDiscipline === "Other" ? (true) : (false)} />
                  <span>Other</span>
                </label>                
              </RadioOptions>
            </RadioGroup>

            <RadioGroup>
              <RadioTitle>Years Of Experience</RadioTitle>
              <RadioOptions>
              <label className="radio-option" htmlFor="0-4">
                <input 
                  name="yearsExperience" 
                  id="0-4" type="radio" 
                  value={yearsExperience} 
                  onChange={props.handleChange}
                  checked={yearsExperience === "0-4" ? (true) : (false)} />
                <span>0-4</span>
              </label>
              
              <label className="radio-option" htmlFor="5-9">
                <input 
                  name="yearsExperience" 
                  id="5-9" 
                  type="radio" 
                  value={yearsExperience} 
                  onChange={props.handleChange}
                  checked={yearsExperience === "5-9" ? (true) : (false)} />
                <span>5-9</span>
              </label>

              <label className="radio-option" htmlFor="10+">
                <input 
                  name="yearsExperience" 
                  id="10+" 
                  type="radio" 
                  value={yearsExperience} 
                  onChange={props.handleChange}
                  checked={yearsExperience === "10+" ? (true) : (false)} />
                <span>10+</span>
              </label>
              </RadioOptions>
            </RadioGroup>     

            <FormBodyAnchor>
               <FormButton>
                  <button className="btn-large z-depth-0" onClick={() => props.handleMode('credentials')}>Go Back</button>
                  <button className="btn-large z-depth-0" onClick={() => props.handleMode('review')}>Onward</button>   
               </FormButton>   
            </FormBodyAnchor>       
          
        </FormBody>

        <FormFooter>
          <FormCancel>
            <a className="btn z-depth-0" href="/signin">Cancel</a>
          </FormCancel>      
        </FormFooter>

      </Form>
    </Fragment>
  )
}

export default ProfileForm