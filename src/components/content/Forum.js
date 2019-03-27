import React, { Component, Fragment } from 'react'
import { ForumContext } from '../../contexts/ForumContext'
import Question from './forum/Question'

const Forum = () => {

   return (
      <div className="Forum">
         <ForumContext.Consumer>
            {context => (
               context.questions.map(question => {
                  return <Question data={question.data()} key={question.id} />
               })
            )}
         </ForumContext.Consumer>
      </div>
   )
  
}

export default Forum