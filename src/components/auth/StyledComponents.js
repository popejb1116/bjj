import styled from 'styled-components'

export const Form = styled.div`
  color: white;
  background-color: rgb(0,0,0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 6rem;
  min-height: 650px;

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

export const FormHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 4rem;
  font-size: 2rem;  
`
// TODO: ADJUST PADDING FOR MOBILE
export const FormBody = styled.div`
  width: 100%;
  padding: 0rem 12rem;
  color: white;
  font-size: 1.5rem;

  /* APPLIES TO SIGNUP LINK IN SIGNIN ONLY */
  .signup-block{
    display: flex;
    align-items: center;
    margin-top: 2rem;
    font-size: 1rem;
  }

  .signup-link{
    color: white;
    background-color: transparent;    
    text-transform: capitalize;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 1rem;
  }

  .signup-link:hover{
    color: white;
    background-color: #ff1744;    
  }
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

export const FormFooter = styled.div`
  width: 100%;
  
  .btn-large {
    color: white;
    background-color: transparent;
    margin: 0.5rem;
    font-size: 2rem;
  }

  .btn-large:hover{
    background-color: #ff1744;
    margin: 0.5rem;
  }

  .btn {
    color: white;
    background-color: transparent;
    margin: 0.5rem;
    font-size: 1rem;
  }

  .btn:hover{
    background-color: #ff1744;
    margin: 0.5rem;
  }
`

export const FormNavAndAction = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  font-weight: bold;
`

export const FormCancel = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
`

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