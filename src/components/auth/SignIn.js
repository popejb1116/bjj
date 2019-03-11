import React, {Fragment} from 'react'
import { auth } from '../../config/fbConfig'
import { Link } from 'react-router-dom'
//import { Form, FormHeader, FormBody, FormFooter, FormNavAndAction, FormCancel, StyledErrorModal} from '../auth/StyledComponents'
import { Form, FormHeader, FormBody, FormFooter, FormNavAndAction, FormCancel, StyledErrorModal} from './StyledComponents'
import M from 'materialize-css'

class SignIn extends React.Component {

  state = {
    email: '',
    password: '',
    errorMessage: ''
  }

  componentDidMount(){
    const elem = document.getElementById('error-modal')
    const options = {
      opacity: 0
    }
    M.Modal.init(elem, options)
  }

  componentWillUnmount(){
    const elem = document.getElementById('error-modal')
    const instance = M.Modal.getInstance(elem)
    instance.destroy()
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
    },
    () =>{
      const elem = document.getElementById('error-modal')
      const instance = M.Modal.getInstance(elem)
      instance.open()
    })
  }

  render(){

    return (
      <Fragment>

        <StyledErrorModal>
          <div id="error-modal" className="modal">
            <div className="modal-content">
              {this.state.errorMessage}
              <a className="modal-close btn-flat">Close</a>
            </div>
          </div>
        </StyledErrorModal>

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
              <a className="btn-large z-depth-0" onClick={this.handleSubmit}>Sign In</a>     
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