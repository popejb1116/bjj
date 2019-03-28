import React, {Fragment} from 'react'
import { ForumContext } from '../../../contexts/ForumContext'
import { StyledQuestion, Marker, Statement, Info, StyledAnswer, AnswerFooter } from './StyledComponents'
import Answer from './Answer'

const Question = props => {
   const { questionData, questionID, instanceIndex, handleCloseAnswers } = props
   return (
      <Fragment>
         <StyledQuestion className="collapsible-header">            
            <Marker>Q</Marker>
            <Statement isQuestion={true} >{questionData.question}</Statement>
            <br/>
            <Info isQuestion={true}>Asked by: {questionData.authorID} at: timestamp</Info>            
         </StyledQuestion>
         
         <StyledAnswer className="collapsible-body">
            <ForumContext.Consumer>
               {context => (
                  context.answers.map(answer => {
                     const { id } = answer
                     const data = answer.data()
                     // FIND CORRESPONDING ANSWERS TO A GIVEN QUESTION
                     if (data.questionID === questionID) {
                        return <Answer answerData={data} key={id} />    
                     }
                  })
               )}
            </ForumContext.Consumer>
            <AnswerFooter>
               <div 
                  className="btn z-depth-0"
                  onClick={() => handleCloseAnswers(instanceIndex)}
                  >Close
               </div>
            </AnswerFooter>
         </StyledAnswer>

         

      </Fragment>
   )
}

export default Question