import React from 'react'
//import moe from '../../images/moe_grumpy.jpg'
import frank from '../../images/frank404.jpg'
import styled from 'styled-components'

const NoMatch = styled.div`
   display: flex;
   flex-flow: column nowrap;
   align-items: center;
   color: white;
   background-color: rgb(0,0,0, 0.6);
   padding-bottom: 1rem;

   h3{
      text-align: center;
   }

   img{
     width: 50%;
     height: 50%;
   }
`

const NoMatch404 = () => {
  return (
    <NoMatch className="container">
      <h3>If here by now then bad place bee...</h3>
      <img src={frank} alt="" />
    </NoMatch>
  )
}

export default NoMatch404
