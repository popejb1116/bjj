import React, { Component } from 'react'
import { auth, firestore } from '../../config/fbConfig'
import { AuthUserContext } from '../../contexts/AuthUserContext'
import { Form, FormHeader, FormBody, FormBodyAnchor, FormButton, RadioGroup, RadioTitle, RadioOptions, FormFooter, FormCancel} from './StyledComponents'
import { Redirect } from 'react-router-dom'

class ProfileEdit extends Component {

   static contextType = AuthUserContext

   state = {
      firstName: this.context.userProfile.firstName,
      lastName: this.context.userProfile.lastName,
      primaryDiscipline: this.context.userProfile.primaryDiscipline,
      yearsExperience: this.context.userProfile.yearsExperience,
      redirectToForum: false
   }

   handleChange = event => {
      const { id, value, name } = event.target  
      // RADIO BUTTON EVENT(S)
      if (name) {
        this.setState({
          [name]: id
        })
      } else {
        // TEXT INPUT EVENT(S)
        this.setState({
          [id]: value
        })
      }    
    }

   handleSubmit = event => {
      event.preventDefault()      
      const {firstName, lastName, primaryDiscipline, yearsExperience} = this.state     
      
      firestore.collection('users').doc(auth.currentUser.uid).update(
         {
            firstName: firstName,
            lastName: lastName,
            primaryDiscipline: primaryDiscipline,
            yearsExperience: yearsExperience
         }
      )
      .then(() => {
         this.setState({redirectToForum: true})      
      })
   }

   render(){     
      const {firstName, lastName, primaryDiscipline, yearsExperience } = this.state
      return this.state.redirectToForum ? (<Redirect to="/forum" />) : 
         (  <div className="row">
            <div className="col s12 m8 offset-m2 l8 offset-l2">
               <Form>
                  <FormHeader>Edit Your Profile Info</FormHeader>

                  <FormBody>          
                     <div className="input-field">
                        <label className="active" htmlFor='firstName'>First Name</label>
                        <input id="firstName" type="text" value={firstName} onChange={this.handleChange}/>
                     </div>
                     
                     <div className="input-field">
                        <label className="active" htmlFor='lastName'>Last Name</label>
                        <input id="lastName" type="text" value={lastName} onChange={this.handleChange}/>
                     </div>

                     <RadioGroup>
                        <RadioTitle>Primary Discipline</RadioTitle>
                        <RadioOptions>
                        <label className="radio-option" htmlFor="BJJ">
                           <input 
                              name="primaryDiscipline" 
                              id="BJJ" 
                              type="radio" 
                              onChange={this.handleChange} 
                              checked={primaryDiscipline === 'BJJ' ? (true) : (false)} />
                           <span>BJJ</span>
                        </label>
                        
                        <label className="radio-option" htmlFor="Judo">
                           <input 
                              name="primaryDiscipline" 
                              id="Judo" 
                              type="radio" 
                              onChange={this.handleChange}
                              checked={primaryDiscipline === "Judo" ? (true) : (false)} />
                           <span>Judo</span>
                        </label>

                        <label className="radio-option" htmlFor="Muay Thai">
                           <input 
                              name="primaryDiscipline" 
                              id="Muay Thai" 
                              type="radio" 
                              onChange={this.handleChange}
                              checked={primaryDiscipline === "Muay Thai" ? (true) : (false)} />
                           <span>Muay Thai</span>
                        </label>        

                        <label className="radio-option" htmlFor="Other">
                           <input 
                              name="primaryDiscipline" 
                              id="Other" 
                              type="radio" 
                              onChange={this.handleChange} 
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
                           onChange={this.handleChange}
                           checked={yearsExperience === "0-4" ? (true) : (false)} />
                        <span>0-4</span>
                        </label>
                        
                        <label className="radio-option" htmlFor="5-9">
                        <input 
                           name="yearsExperience" 
                           id="5-9" 
                           type="radio" 
                           value={yearsExperience} 
                           onChange={this.handleChange}
                           checked={yearsExperience === "5-9" ? (true) : (false)} />
                        <span>5-9</span>
                        </label>

                        <label className="radio-option" htmlFor="10+">
                        <input 
                           name="yearsExperience" 
                           id="10+" 
                           type="radio" 
                           value={yearsExperience} 
                           onChange={this.handleChange}
                           checked={yearsExperience === "10+" ? (true) : (false)} />
                        <span>10+</span>
                        </label>
                        </RadioOptions>
                     </RadioGroup>     

                     <FormBodyAnchor>
                        <FormButton>
                           <button className="btn-large z-depth-0" onClick={this.handleSubmit}>Submit</button>                     
                        </FormButton>   
                     </FormBodyAnchor>    

                     <FormFooter>
                        <FormCancel>
                           <a className="btn z-depth-0" href="/forum">Cancel</a>
                        </FormCancel>      
                     </FormFooter>   
                  
                  </FormBody>
               </Form>
            </div>
         </div>
      )
   }
   
}

export default ProfileEdit