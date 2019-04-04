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

   onSubmit = e => {
      console.log('onSubmit called')
      e.preventDefault()
      firestore.collection('discussionQuestions').doc().set({
         question: this.state.question,
         askedAt: new Date(),
         authorID: this.context.authUser.uid
      })
      .then(() => {
         this.setState({redirectToForum: true})
         window.location.reload(true)
      })
      .catch(err => {
         console.log('error')
      })
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

/* 
<div className="row">
   <form className="col s12">
      <div className="row">
      <div className="input-field col s12">
         <textarea id="textarea1" className="materialize-textarea"></textarea>
         <label for="textarea1">Textarea</label>
      </div>
      </div>
   </form>
</div>
*/