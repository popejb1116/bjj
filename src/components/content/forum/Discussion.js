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
               {/* <Title className="card-title center activator">ID: {id}</Title>
               <Question className="activator">
                  Question: {data.question}
                  <i className="material-icons right activator">more_vert</i>
               </Question> */}
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
               
               <span className="card-title grey-text text-darken-4">Author 2</span>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde itaque eligendi magnam laboriosam qui rem officia totam ducimus. Tempora aperiam ullam nesciunt repudiandae, voluptatem provident nam qui voluptas nobis nulla.</p>
            </div>    

         
      </Card>
   )
}

export default Discussion

