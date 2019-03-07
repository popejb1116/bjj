import React, {Fragment} from 'react'
import { auth } from '../../config/fbConfig'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Form = styled.div`
  color: white;
  background-color: rgb(0,0,0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 4rem;
  min-height: 500px;

  input, label{
    color: white;
  }

  input:focus{
  color: #ff1744 !important;
  border-bottom: 1px solid #ff1744 !important;
  box-shadow: 0 1px 0 0 #ff1744 !important;
  font-size: 35px;
  }
`

const FormHeader = styled.div`
  margin-top: 2rem;
  font-size: 2rem;  
`

const FormBody = styled.div`
  width: 100%;
  padding: 0rem 4rem;

  .signup-block{
    display: flex;
    align-items: center;
    margin-top: 2rem;
  }

  .signup-link{
    background: transparent;
    color: white;
    text-transform: capitalize;
    padding-left: 8px;
    padding-right: 8px;
  }

  .signup-link:hover{
    background-color: #ff1744;
    color: white;
  }
`

const FormFooter = styled.div`
  width: 100%;

  .btn, .btn-large {
    color: white;
    background-color: transparent;
  }

  .btn:hover, .btn-large:hover{
    background-color: #ff1744;
  }
`

const FormNavAndAction = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  font-weight: bold;
`

const FormCancel = styled.div`
  display: flex;
  justify-content: flex-end;
`

class SignIn extends React.Component {

  state = {
    email: '',
    password: '',
    errorMessage: ''
  }

  handleChange = event => {
    const { id, value } = event.target
    this.setState({
      [id]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { email, password } = this.state    
    auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log(user)
      this.props.history.push('/forum')
    })
    .catch(error => {
      this.handleError(error)
    })
  }

  handleError = error => {
    this.setState({
      email: '',
      password: '',
      errorMessage: error.message
    })
  }


  render(){

    return (
      <Fragment>
        <Form>

          <FormHeader>
            Quote of the day...
          </FormHeader>

          <FormBody>
            <form >
              <div className="input-field">
                <label htmlFor='email'>Email Address</label>
                <input id="email" type="email" value={this.state.email} onChange={this.handleChange}/>
              </div>
              
              <div className="input-field">
                <label htmlFor='password'>Password</label>
                <input id="password" type="password" value={this.state.password} onChange={this.handleChange}/>
              </div>  

              <div className="signup-block">
                <div>Don't have an account?</div>
                <Link to="/signup" className="signup-link btn z-depth-0">Sign Up</Link>
              </div>
            </form>   
          </FormBody>

          <FormFooter> 
            <FormNavAndAction>
              <a className="btn-large z-depth-0">Sign In</a>     
            </FormNavAndAction>   
            <FormCancel>
              <a className="btn z-depth-0" href="/">Cancel</a>
            </FormCancel>       
          </FormFooter>

        </Form>
      </Fragment>
    )
  }
  
}


export default SignIn



{/*



import React, {Fragment} from 'react'
import { auth } from '../../config/fbConfig'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledForm = styled.div`
  
  color: white;
  background-color: rgb(0,0,0, 0.6);
  padding: 5%;

  input{
  color: #ff1744 !important;
  }

  input:focus{
  color: #ff1744 !important;
  border-bottom: 1px solid #ff1744 !important;
  box-shadow: 0 1px 0 0 #ff1744 !important;
  font-size: 35px;
  }

  .btn-large {
  background: transparent;
  color: white;
  font-size: 40px;
  text-transform: capitalize;
  }

  .btn-large:hover{
  background-color: #ff1744;
  color: white;
  }

  .signup-block{
    display: flex;
    align-items: center;
  }

  .signup-link{
    background: transparent;
    color: white;
    text-transform: capitalize;
    padding-left: 8px;
    padding-right: 8px;
  }

  .signup-link:hover{
    background-color: #ff1744;
    color: white;
  }

`

const StyledError = styled.div`
  background-color: #ff1744;
  color: white;
  text-align: center;
  font-size: 20px;
  width: 100%;
  float: left;
`


class SignIn extends React.Component {

  state = {
    email: '',
    password: '',
    errorMessage: ''
  }

  handleChange = event => {
    const { id, value } = event.target
    this.setState({
      [id]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { email, password } = this.state    
    auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log(user)
      this.props.history.push('/forum')
    })
    .catch(error => {
      this.handleError(error)
    })
  }

  handleError = error => {
    this.setState({
      email: '',
      password: '',
      errorMessage: error.message
    })
  }

  render(){

    return (
      <Fragment>
        <StyledError>
          {this.state.errorMessage}
        </StyledError>
        <StyledForm>
          <form className="SignIn" onSubmit={this.handleSubmit} >      
          
              <div className="input-field">
                <label htmlFor='email'>Email Address</label>
                <input id="email" type="email" value={this.state.email} onChange={this.handleChange}/>
              </div>
              <div className="input-field">
                <label htmlFor='password'>Password</label>
                <input id="password" type="password" value={this.state.password} onChange={this.handleChange}/>
              </div>
              
              <div className="center">
                <button className="btn-large z-depth-0">Sign In</button>
              </div>

              <div className="signup-block">
                <div>Don't have an account?</div>
                <Link to="/signup" className="signup-link btn z-depth-0">Sign Up</Link>
              </div>          
          </form>
        </StyledForm>
      </Fragment>
    )
  }
  
}


export default SignIn










*/}