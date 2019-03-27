import React from 'react'
import { Card } from './StyledComponents'
import { ForumContext } from '../../../contexts/ForumContext'
import Answer from './Answer'

const divStyle = {
   minHeight: 200
}

const Question = props => {
   const { data } = props
   return (
      <Card className="card" >
         <div className="card-content" style={divStyle}>

            <div className="card-title center activator">
               {data.question}
               <i className="material-icons right">more_vert</i>
            </div>

            <div>
               Asked By: {data.authorID} On: data.askedAt()
               <i className="material-icons right">reply</i>
            </div>

         </div>

         <div className="card-reveal" style={divStyle}>

            <div className="card-title center">
               <div className="btn-flat">
                  <i className="material-icons">close</i>
               </div>               
            </div>
         
            <ForumContext.Consumer>
               {context => (
                  context.answers.map(answer => {
                     return <Answer data={answer.data()} questionID="0" key={answer.id} />                  
                  })
               )}
            </ForumContext.Consumer>

            <div className="card-title center">
               <div className="btn-flat">
                  <i className="material-icons">close</i>
               </div>               
            </div>
         
         </div>

      </Card>
   )
}

export default Question