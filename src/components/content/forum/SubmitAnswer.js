import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { Form, FormFooter } from './StyledComponents'
import { firestore } from '../../../config/fbConfig'

class SubmitAnswer extends Component {

   state = {
      answer: '',
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

      const { questionID, questionIndex, authUserUID } = this.props.location.questionInfo

      try {

         // GET AUTH USER INITIALS FOR SUBSEQUENT POST
         //const userDoc = await firestore.collection('users').doc(this.context.authUser.uid.toString()).get()
         const userDoc = await firestore.collection('users').doc(authUserUID.toString()).get()
         const authorLabel = userDoc.data().firstName + ' ' + userDoc.data().lastName[0] + '.'

         // TODO: authorID ->  authorLabel
         // POST ANSWER TO FIRESTORE
         const answerDoc = await firestore.collection('forumAnswers').doc()
         await answerDoc.set({
         answer: this.state.answer,
         answeredAt: new Date(),
         authorID: authorLabel,
         questionID: questionID
         })

         this.setState({redirectToForum: true})
         window.location.reload(true)
      } catch (error) {
         console.log('Submit Answer Error')
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
                     id="answer" 
                     className="materialize-textarea"
                     value = {this.state.answer}
                     onChange = {this.onChange}>
                  </textarea>
                  <label htmlFor="answer">Answer</label>
               </div>
               <FormFooter>
                  <button className="btn z-depth-0">Submit</button>
                  <div className="btn z-depth-0" onClick={this.onCancel}>Cancel</div>
               </FormFooter>
            </Form>
         </div>)
   }
}

export default withRouter(SubmitAnswer)