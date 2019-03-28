import React, {Fragment} from 'react'
import { ForumContext } from '../../../contexts/ForumContext'
import { StyledQuestion, Marker, Statement, Info, StyledAnswer } from './StyledComponents'
import Answer from './Answer'

const Question = props => {
   const { data, questionID } = props
   return (
      <Fragment>
         <StyledQuestion className="collapsible-header">            
            <Marker>Q</Marker>
            <Statement isQuestion={true} >{data.question}</Statement>
            <br/>
            <Info isQuestion={true}>Asked by: {data.authorID} at: timestamp</Info>            
         </StyledQuestion>
         
         <StyledAnswer className="collapsible-body">
            <ForumContext.Consumer>
               {context => (
                  context.answers.map(answer => {
                     if (answer.data().questionID === questionID) {
                        return <Answer data={answer.data()} key={answer.id} />    
                     }
                  })
               )}
            </ForumContext.Consumer>
         </StyledAnswer>

      </Fragment>
   )
}

export default Question