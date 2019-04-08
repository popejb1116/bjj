import React from 'react'
import moe from '../../images/moe_grumpy.jpg'
import styled from 'styled-components'

const NoAuth = styled.div`
   display: flex;
   flex-flow: column nowrap;
   align-items: center;
   color: white;
   background-color: rgb(0,0,0, 0.6);
   padding-bottom: 1rem;

   h3{
      text-align: center;
   }
` 

const NoAuthNotAllowed = () => {
   return (
      <NoAuth className="container">
         <h3>Heyyyyy, What's the big idea?</h3>
         <img src={moe} alt="" />
      </NoAuth>
   )
}

export default NoAuthNotAllowed