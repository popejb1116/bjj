import React, { Fragment } from 'react'
import { Statement, Info } from './StyledComponents'

const Answer = props => {  
   const { data } = props
   return (
     <Fragment>
         <Statement isQuestion={false}>Answer: {data.answer}</Statement>
         <Info isQuestion={false}>Answered by: {data.authorID} at: timestamp</Info>
         <br/>
     </Fragment>
   )
}

export default Answer