import React, {Component} from 'react'
import { auth, firestore } from '../config/fbConfig'


const ForumContext = React.createContext()

class ForumProvider extends Component {

   // documentListenerUnsubscribe = null
   // unsubFromDiscussionsListener = null
   // unsubFromDiscussionsListener = null

   state = {
      discussions: [],
      discussionResponses: [],
      message: 'Forum Context Says Hi'
   }

   async componentDidMount(){
      console.log('forum context cdm')

      const snapshot_dis = await firestore.collection('discussions').get()
      const tempDiscussions = []
      await snapshot_dis.forEach( discussion => {
         tempDiscussions.push(discussion)
      })    

      const snapshot_res = await firestore.collection('discussionResponses').get()
      const tempDiscussionResponses = []
      await snapshot_res.forEach( response => {
         tempDiscussionResponses.push(response)
      })

      this.setState({ 
         discussions: tempDiscussions,
         discussionResponses: tempDiscussionResponses
      })

      /* const discussionsArray = []
      this.documentListenerUnsubscribe = firestore.collection('forumDiscussion').onSnapshot(snapshot => {
         snapshot.forEach(discussion => {
            const discussionObject = {'id': discussion.id, 'data': discussion.data()}
            discussionsArray.push(discussionObject)
            // discussions.push(discussion.data())            
            // console.log(discussion.id)
            // console.log(discussion.data())            
         })
      })
 */

   }

   componentWillUnmount(){
      //this.documentListenerUnsubscribe()
   }

   render(){
      return (
         <ForumContext.Provider value = {{
            discussions: this.state.discussions,
            discussionResponses: this.state.discussionResponses,
            message: this.state.message
         }}>
            {this.props.children}
         </ForumContext.Provider>
      )
   }
   
}

export {ForumContext, ForumProvider}