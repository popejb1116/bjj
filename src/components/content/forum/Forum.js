import React, { Component, Fragment } from 'react'
import { ForumContext } from '../../../contexts/ForumContext'
import Question from './Question'
import M from 'materialize-css'
import { ForumContainer, ForumHeader } from './StyledComponents'

class Forum extends Component {

   elem = null
   instance = null

   componentDidMount(){
      this.elem = document.querySelector('.collapsible')
      this.instance = M.Collapsible.init(this.elem)
   }

   componentWillUnmount(){
      this.instance.destroy()
   }

   handleReply = () => {
      console.log('Open reply form')
   }

   handleCloseAnswers = index => {
      this.instance.close(index)
   }

   render(){
      return (
         <ForumContainer className="container">

            <ForumHeader>
               <div className="btn-large z-depth-0">Ask A Question</div>         
            </ForumHeader>
            
            <ul className="collapsible z-depth-1">
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
                                 handleReply = {this.handleReply}
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


{/* <ul className="collapsible" id="forum-discussions">
   <li>
      <div className="collapsible-header">First<i className="material-icons right">reply</i></div>
      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
   </li>
   <li>
      <div className="collapsible-header">Second</div>
      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
   </li>
   <li>
      <div className="collapsible-header">Third</div>
      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
   </li>
</ul> */}