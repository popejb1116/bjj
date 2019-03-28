import React, {Component} from 'react'
import { auth, firestore } from '../config/fbConfig'

const ForumContext = React.createContext()

class ForumProvider extends Component {

   state = {
      questions: [],
      answers: []
   }

   async componentDidMount(){
      
      const snapshot_que = await firestore.collection('discussionQuestions').get()
      const tempQuestions = []
      await snapshot_que.forEach( question => {
         tempQuestions.push(question)
      })

      const snapshot_ans = await firestore.collection('discussionAnswers').get()
      const tempAnswers = []
      await snapshot_ans.forEach( answer => {
         tempAnswers.push(answer)
      })

      this.setState({
         questions: tempQuestions,
         answers: tempAnswers
      })    

      /* LISTENER EXAMPLE 
      const discussionsArray = []
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
            questions: this.state.questions,
            answers: this.state.answers
         }}>
            {this.props.children}
         </ForumContext.Provider>
      )
   }
   
}

export {ForumContext, ForumProvider}