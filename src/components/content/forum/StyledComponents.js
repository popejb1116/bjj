import styled from 'styled-components'

export const ForumContainer = styled.div`
   margin-top: 2rem;

   .collapsible{
      border: 0
   }  
`

export const StyledErrorModal = styled.div`
  color: white;
  font-size: 1.5rem;

  .modal{
     background-color: transparent;
  }

  .modal-content{
    background-color: #ff1744;
    text-align: center;
    padding: 1rem;
  }
  .modal-close{
    display: flex;
    justify-content: flex-end;
    color: white;    
    background-color: #ff1744;
    font-size: 1rem;
    font-weight: bold;
  }
`

export const ForumHeader = styled.div`
   display: flex;
   flex-flow: row nowrap;
   justify-content: center;
   padding: 1rem;

   .btn-large {
    color: #ff1744;
    background-color: transparent;    
    margin: 0 0.5rem;
    padding: 0 1rem;
    font-weight: bold;
    font-size: 1.25rem;
  }

   .btn-large:hover{
      color: white !important;
      background-color: #ff1744;
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
   "white" : "#ff1744" };   
   font-size: 1rem !important;
   font-weight: bold !important;  
`

export const StyledAnswer = styled.div`
   background-color: white;
`

export const AnswerOption = styled.div`
   display: flex;
   flex-flow: row nowrap;
   justify-content: center;

   .btn{
      color: #ff1744;
      background-color: transparent;
      font-weight: bold;
   }

   .btn:hover{
      color: white;
      background-color: #ff1744;
      font-weight: bold;
   }
`