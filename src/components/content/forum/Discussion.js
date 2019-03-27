import React, { Fragment } from 'react'
import { Card, Title, Question, Author } from './StyledComponents'
import { ForumContext } from '../../../contexts/ForumContext'
import DiscussionResponses from './DiscussionResponses'

const Discussion = props => {
   const id = props.discussion.id
   const data = props.discussion.data()
   return (
      <Card className="card">              

            <div className="card-content">
               <Question className="card-title center activator">
                  {data.question}
                  <i className="material-icons right">more_vert</i>
               </Question>
               <Author>Asked By: {data.authorIndex} On: data.askedAt()</Author>

            </div>
            
            <div className="card-reveal">
               <ForumContext.Consumer>
                  {context => (
                     context.discussionResponses.map(response => {
                        return <DiscussionResponses response={response} key={response.id} />
                     })
                  )}
               </ForumContext.Consumer>
            </div>    

         
      </Card>
   )
}

export default Discussion

