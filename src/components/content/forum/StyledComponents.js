import styled from 'styled-components'

export const ForumContainer = styled.div`
   margin-top: 2rem;

   .collapsible{
      border: 0
   }  
`

export const StyledQuestion = styled.div`
   background-color: rgb(0,0,0, 0.6); 
   display: flex;
   flex-flow: column nowrap;   
`

export const Marker = styled.div`
   color: #ff1744 !important;
   text-align: center;
   font-size: 3.25rem;
   font-weight: bold;  
`

export const Statement = styled.div`
   color: ${props => props.isQuestion ?
   "white" : "black" };   
   text-align: ${props => props.isQuestion ?
   "center" : "left" };   
   font-size: 1rem; 
`

export const Info = styled.div`
   color: ${props => props.isQuestion ?
   "white" : "black" };   
   font-size: 1rem !important;
   font-weight: bold !important;  
`

export const StyledAnswer = styled.div`
   background-color: white;
`