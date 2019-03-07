import styled from 'styled-components'

export const Form = styled.div`
  color: white;
  background-color: rgb(0,0,0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 5rem 15rem;
  min-height: 500px;

  input, label{
    color: white;
  }

  input:focus{
  color: #ff1744 !important;
  border-bottom: 1px solid #ff1744 !important;
  box-shadow: 0 1px 0 0 #ff1744 !important;
  font-size: 3rem;
  }

  .btn, .btn-large {
    color: white;
    background-color: transparent;
  }

  .btn:hover, .btn-large:hover{
    background-color: #ff1744;
  }
`

export const FormHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  font-size: 2rem;  
`

export const FormBody = styled.div`
  width: 100%;
  padding: 0rem 10rem;

  /* APPLIES TO SIGNUP LINK IN SIGNIN ONLY */
  .signup-block{
    display: flex;
    align-items: center;
    margin-top: 2rem;
  }

  .signup-link{
    color: white;
    background-color: transparent;    
    text-transform: capitalize;
    padding-left: 8px;
    padding-right: 8px;
  }

  .signup-link:hover{
    color: white;
    background-color: #ff1744;    
  }
`

export const FormFooter = styled.div`
  width: 100%;
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
`