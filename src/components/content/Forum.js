import React, { Component, Fragment } from 'react'
//import { AuthUserContext } from '../../contexts/AuthUserContext'
//import { firestore } from '../../config/fbConfig'
import { ForumContext } from '../../contexts/ForumContext'
import Discussion from './forum/Discussion'

// NOT USING FORUM CONTEXT RIGHT NOW, DIRECT CALLS TO FIRESTORE

class Forum extends Component {

   //static contextType = AuthUserContext
   static contextType = ForumContext

   /* state = {
      discussions: [],
      discussionResponses: []
   }  

   async componentDidMount(){
      const snapshot = await firestore.collection('discussions').get()
      const tempDiscussions = []
      await snapshot.forEach( discussion => {
         tempDiscussions.push(discussion)
      })    
      this.setState({ discussions: tempDiscussions })
   } */

   componentWillUnmount(){

   }

   render(){

      /* const discussionList = this.state.discussions.map(discussion => {
         console.log(discussion)
         console.log(discussion.id)
         console.log(discussion.data())         
         return <Discussion discussion={discussion} key={discussion.id} />
      }) */

     /*  let conditionalContent = this.context.authUser ? (
         {discussionList}
         ) : (
         <h1>Please Sign In or Sign Up to view the forum</h1>
      ) */

      const discussionList = this.context.discussions.map( discussion => {
         return <Discussion discussion={discussion} key={discussion.id} />
      })

      return (
         <div className="Forum">
            {discussionList}
         </div>
      )
   }
  
}

export default Forum