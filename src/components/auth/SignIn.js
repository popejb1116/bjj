import React, {Fragment} from 'react'
import { auth } from '../../config/fbConfig'
import { Link } from 'react-router-dom'
import { Form, FormHeader, FormBody, FormFooter, FormNavAndAction, FormCancel} from '../auth/StyledComponents'

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