import React, { Fragment } from 'react'

const Answer = props => {  
   const { data, questionID } = props
   return (
     <Fragment>
         <div>Author: {data.authorID}</div>
         <p>QuetionID: {questionID} Answer: {data.answer}</p>
     </Fragment>
      
   )
}

export default Answer