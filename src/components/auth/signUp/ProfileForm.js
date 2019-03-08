import React, { Fragment } from 'react'
import { Form, FormHeader, FormBody, RadioGroup, RadioTitle, RadioOptions, FormFooter, FormNavAndAction, FormCancel} from '../StyledComponents'

const ProfileForm = props => {
  return (
    <Fragment>
      <Form>
        <FormHeader>
          Now Your Profile And Martial Arts History...  
        </FormHeader>

        <FormBody>
          <form>
            <div className="input-field">
              <label htmlFor='firstName'>First Name</label>
              <input id="firstName" type="text" value={props.state.firstName} onChange={props.handleChange}/>
            </div>
            
            <div className="input-field">
              <label htmlFor='lastName'>Last Name</label>
              <input id="lastName" type="text" value={props.state.lastName} onChange={props.handleChange}/>
            </div>

            <RadioGroup>
              <RadioTitle>Primary Discipline</RadioTitle>
              <RadioOptions>
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
              </RadioOptions>
            </RadioGroup>

            <RadioGroup>
              <RadioTitle>Years Of Experience</RadioTitle>
              <RadioOptions>
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
              </RadioOptions>
            </RadioGroup>            
          </form>
        </FormBody>

        <FormFooter>
          <FormNavAndAction>
            <a className="btn-large z-depth-0" onClick={() => props.handleMode('credentials')}>Go Back</a>
            <a className="btn-large z-depth-0" onClick={() => props.handleMode('review')}>Onward</a>
          </FormNavAndAction>
          <FormCancel>
            <a className="btn z-depth-0" href="/signin">Cancel</a>
          </FormCancel>      
        </FormFooter>

      </Form>
    </Fragment>
  )
}

export default ProfileForm