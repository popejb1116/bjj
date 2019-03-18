import React, {Fragment} from 'react'
import { auth } from '../../config/fbConfig'
import { Link } from 'react-router-dom'
import { StyledErrorModal, Form, FormHeader, FormBody, FormInlineNote, FormBodyAnchor, FormButton, FormFooter, FormCancel} from './StyledComponents'
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

        <div className="row">
            <div className="col s12 m8 offset-m2 l8 offset-l2">                        
               <Form>                  
                  <FormHeader>Quote of the day...</FormHeader>   
                  
                  <FormBody onSubmit={this.handleSubmit}>                  
                     <div className="input-field">
                        <label htmlFor='email'>Email Address</label>
                        <input id="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                     </div>
                     
                     <div className="input-field">
                        <label htmlFor='password'>Password</label>
                        <input id="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                     </div>  

                     <FormInlineNote>
                        <div>Don't have an account?</div>                        
                        <Link to="/signup" className="btn-small z-depth-0">Sign Up</Link>                        
                     </FormInlineNote>

                     <FormBodyAnchor>
                        <FormButton >
                           <button className="btn-large z-depth-0" onClick={this.handleSubmit}>Sign In</button>
                        </FormButton>
                     </FormBodyAnchor>                     
                  </FormBody>
                  
                  <FormFooter>
                     <FormCancel><a className="btn z-depth-0" href="/">Cancel</a></FormCancel>
                  </FormFooter>
               </Form>           
            </div>
        </div>

      </Fragment>
    )
  }
  
}


export default SignIn