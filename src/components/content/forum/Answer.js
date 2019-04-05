import React, { Fragment } from 'react'
import { Statement, Info } from './StyledComponents'

const Answer = props => {  
   const { answerData } = props
   // CONVERT FIREBASE TIMESTAMP TO JS DATE THEN PARSE, timestamp IS OBJECT TYPE DATE
   const timestamp = answerData.answeredAt.toDate()
   const date = timestamp.toLocaleDateString()
   const time = timestamp.toLocaleTimeString()

   return (
     <Fragment>
         <Statement isQuestion={false}>Answer: {answerData.answer}</Statement>
         <Info 
            isQuestion={false}
            >Answered by {answerData.authorLabel} on {date} at {time}</Info>
         <br/>
     </Fragment>
   )
}

export default Answer