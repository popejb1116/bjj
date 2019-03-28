import React, { Component, Fragment } from 'react'
import { ForumContext } from '../../contexts/ForumContext'
import Question from './forum/Question'
import M from 'materialize-css'
import { ForumContainer } from './forum/StyledComponents'

class Forum extends Component {

   componentDidMount(){
      const elem = document.querySelector('.collapsible')
      M.Collapsible.init(elem)
   }

   componentWillUnmount(){
      const elem = document.querySelector('.collapsible')
      const instance = M.Collapsible.getInstance(elem)
      instance.destroy()
   }

   render(){
      return (
         <ForumContainer className="container">         
            <ul className="collapsible z-depth-1">
               <ForumContext.Consumer>
                  {context => (
                     context.questions.map(question => {
                        const {id} = question
                        const data = question.data()
                        return <li key={id}><Question data={data} questionID={id}/></li>
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