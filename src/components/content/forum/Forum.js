import React, { Component, Fragment } from 'react'
import { ForumContext } from '../../../contexts/ForumContext'
import Question from './Question'
import M from 'materialize-css'
import { ForumContainer, ForumHeader, StyledErrorModal } from './StyledComponents'
import { AuthUserContext } from '../../../contexts/AuthUserContext'

class Forum extends Component {

   static contextType = AuthUserContext

   /* COLLAPSIBLE REFERENCES */
   collapsibleElem = null
   collapsibleInstance = null

   /* ERROR MODAL REFERENCES */
   modalElem = null
   modalInstance = null

   //TODO: ADD LINK
   state = {
      noAuthErrorMessage: 'Submitting questions and answers is reserved for account members only. We do this in order to control the quality of technical information being distributed. ' + 
      'We understand you see this alot, and if this is a deal breaker we hope you will still find entertainment and useful knowledge on our website. No hard feelings, which is a great song that would better ' +
      ' the human condition itself, please have a listen.'
   }

   componentDidMount(){
      this.collapsibleElem = document.getElementById('collapsible')
      this.collapsibleInstance = M.Collapsible.init(this.collapsibleElem)

      this.modalElem = document.getElementById('error-modal')
      const options = {
         onCloseEnd: this.handleErrorModalClose
      }
      this.modalInstance = M.Modal.init(this.modalElem, options)
   }

   componentWillUnmount(){
      this.collapsibleInstance.destroy()     
   }

   //TODO: IMPLEMENTED REDIRECT TO SIGN IN
   handleErrorModalClose = () => {
      //this.modalInstance.destroy()
   }

   handleQuestion = () => {      
      if (this.context.authUser) {
         this.props.history.push('/forum/ask')     
      } else {
         this.modalInstance.open()
      }
   }

   handleAnswer = (questionID, questionIndex) => {
      // AUTHUSERUID PASSED AS PROP BECAUSE SUBMIT ANSWER CAN'T USE contextType WITH withRouter
      if (this.context.authUser) {
         this.props.history.push({
            pathname: '/forum/answer',
            questionInfo: { 
               questionID: questionID,
               questionIndex: questionIndex,
               authUserUID: this.context.authUser.uid
            }
         })
      } else {
         this.modalInstance.open()
      }      
   }

   handleCloseAnswers = index => {
      this.collapsibleInstance.close(index)
   }

   render(){
      return (
         <ForumContainer className="container">

            <StyledErrorModal >
               <div id="error-modal" className="modal">
                  <div className="modal-content">
                     {this.state.noAuthErrorMessage}
                     <a className="modal-close btn-flat">Close</a>
                  </div>
               </div>
            </StyledErrorModal>

            <ForumHeader>
               <div 
                  className="btn-large z-depth-0"
                  onClick = {this.handleQuestion}
                  >Ask A Question
               </div>         
            </ForumHeader>
            
            <ul id="collapsible" className="collapsible z-depth-1">
               <ForumContext.Consumer>
                  {context => (
                     context.questions.map( (question, index) => {
                        const { id } = question
                        const data = question.data()
                        return ( 
                           <li key={id}>
                              <Question 
                                 questionData={data} 
                                 questionID={id} 
                                 instanceIndex = {index}
                                 handleAnswer = {this.handleAnswer}
                                 handleCloseAnswers={this.handleCloseAnswers}/>
                           </li> 
                        )
                     })
                  )}
               </ForumContext.Consumer>
            </ul>         
         </ForumContainer>
      )
   }  
}

export default Forum