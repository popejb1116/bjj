import React from 'react'
import moe from '../../images/moe_grumpy.jpg'

const NoAuthNotAllowed = () => {
   return (
      <div className="container center">
         <h1>Heyyyyy, What's the big idea?</h1>
         <img src={moe} />
      </div>
   )
}

export default NoAuthNotAllowed