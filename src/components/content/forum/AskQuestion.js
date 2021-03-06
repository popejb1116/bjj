import React, { Component } from 'react'
import { Form, FormFooter } from './StyledComponents'
import { firestore } from '../../../config/fbConfig'
import { Redirect } from 'react-router-dom'
import { AuthUserContext } from '../../../contexts/AuthUserContext'

class AskQuestion extends Component {

   static contextType = AuthUserContext

   state = {
      question: '',
      redirectToForum: false
   }

   onChange = e => {
      const { id, value } = e.target
      this.setState({
         [id]: value
      })
   }

   onSubmit = async e => {
      e.preventDefault()
      try {
         // GET AUTH USER INITIALS FOR SUBSEQUENT POST
         const userDoc = await firestore.collection('users').doc(this.context.authUser.uid.toString()).get()
         const authorLabel = userDoc.data().firstName + ' ' + userDoc.data().lastName[0] + '.'

         // POST QUESTION TO FIRESTORE
         const doc = await firestore.collection('forumQuestions').doc()
         await doc.set({
            question: this.state.question,
            askedAt: new Date(),
            authorLabel: authorLabel
         })
         
         this.setState({redirectToForum: true})
         window.location.reload(true)
      } catch (error) {
         console.log('ask question error')
      }

      
   }

   onCancel = () => {
      this.setState({redirectToForum: true})
   }

   render() {
      return this.state.redirectToForum ? (<Redirect to="/forum"/>) : 
      
         (<div className="container">
            <Form onSubmit={this.onSubmit}>

               <div className="input-field">
                  <textarea 
                     id="question" 
                     className="materialize-textarea"
                     value = {this.state.question}
                     onChange = {this.onChange}>
                  </textarea>
                  <label htmlFor="question">Question</label>
               </div>

               <FormFooter>
                  <button className="btn z-depth-0">Submit</button>
                  <div className="btn z-depth-0" onClick={this.onCancel}>Cancel</div>
               </FormFooter>

            </Form>
         </div>)
   }
}

export default AskQuestion