import React, { Fragment } from 'react'
import { Statement, Info } from './StyledComponents'

const Answer = props => {  
   const { answerData } = props
   return (
     <Fragment>
         <Statement isQuestion={false}>Answer: {answerData.answer}</Statement>
         <Info isQuestion={false}>Answered by: {answerData.authorID} at: timestamp</Info>
         <br/>
     </Fragment>
   )
}

export default Answer