import styled from 'styled-components'

export const StyledErrorModal = styled.div`
  color: white;
  font-size: 1.5rem;

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

export const Form = styled.div`
   display: flex;
   flex-flow: column nowrap;
   justify-content: space-between;
   align-items: center;   
   background-color: rgb(0,0,0, 0.6);
   min-height: 700px;
`

export const FormHeader = styled.div`
   color: white;
   background-color: transparent;
   margin-top: 1rem;
   text-align: center;
   font-size: 1.75rem;
   min-height: 100px;  
`

export const FormBody = styled.form`
   display: flex;
   flex-flow: column nowrap;
   color: white;
   background-color: transparent;  
   width: 75%;
   min-height: 450px;

   input, label{
    color: white;
    font-size: 1.5rem;
   }

  input:focus{
    color: #ff1744 !important;
    border-bottom: 1px solid #ff1744 !important;
    box-shadow: 0 1px 0 0 #ff1744 !important;
    font-size: 2.5rem;
   }
`

export const FormInlineNote = styled.div`
   display: flex;
   flex-flow: row wrap;
   align-items: center;
   font-size: 0.9rem;

   .btn-small {
    color: white;
    background-color: transparent;    
    padding: 0 0.5rem;
    text-transform: capitalize;
    font-size: 0.9rem;
  }

  .btn-small:hover{
    background-color: #ff1744;    
    padding: 0 0.5rem;
    font-size: 0.9rem;
  }   
`

export const FormBodyAnchor = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`

export const FormButton = styled.div`
   margin: 0.5rem;

   .btn-large {
    color: white;
    background-color: transparent;    
    margin: 0 0.5rem;
    padding: 0 1rem;
    font-weight: bold;
    font-size: 1.25rem;
  }

  .btn-large:hover{
    background-color: #ff1744;
  }
`

export const FormFooter = styled.div`
   width: 75%;
   margin-bottom: 4rem;   

  .btn {
    color: white;
    background-color: transparent;
    margin-right: 0;
    font-size: 1rem;
  }

  .btn:hover{
    background-color: #ff1744;
    margin-right: 0;
  }
`

export const FormCancel = styled.div`
   display: flex;
   justify-content: flex-end;
   font-size: 1rem;
`



export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  background-color: transparent;
  margin: 1rem 0rem;
`

export const RadioTitle = styled.div`
  color: white;
  font-size: 1.5rem;
`

export const RadioOptions = styled.div`
  min-width: 5rem;
  font-size: 1rem;  

  [type="radio"]:not(:checked)+span{
    color: white;  
    margin-right: 1rem;
    padding-left: 1.5rem;
  }

  [type="radio"]:checked+span{
    color: white;    
    margin-right: 1rem;
    padding-left: 1.5rem;
  }

  [type="radio"]:checked+span:after{
    background-color: #ff1744;
    border: 2px;
    border-color: #ff1744;
  }
`