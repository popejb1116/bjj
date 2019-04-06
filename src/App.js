import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter, Route, Redirect} from 'react-router-dom'
import Navbar from './components/navigation/Navbar'
import Home from './components/content/Home'
import Forum from './components/content/forum/Forum'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/signUp/SignUp'
import SignOut from './components/auth/SignOut'
import ProfileEdit from './components/auth/ProfileEdit'
import AskQuestion from './components/content/forum/AskQuestion'
import SubmitAnswer from './components/content/forum/SubmitAnswer'
import { AuthUserContext } from './contexts/AuthUserContext'
import NoAuthNotAllowed from './components/auth/NoAuthNotAllowed'

class App extends Component {

   static contextType = AuthUserContext

   render() {
      return (
         <div className="App">
            <BrowserRouter>
               <div className="router">
                  <Navbar />
                  <Route exact path="/" component={Home} />
                  <Route exact path="/forum" component={Forum} />
                  <Route path="/forum/ask" render={() => {
                     return this.context.authUser ? 
                        (<AskQuestion />) : (<NoAuthNotAllowed />)
                  }} />
                  <Route path="/forum/answer" render={() => {
                     return this.context.authUser ? 
                        (<SubmitAnswer />) : (<NoAuthNotAllowed />)
                  }} />
                  <Route path="/signin" component={SignIn} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/signout" component={SignOut} />
                  <Route path="/profile" render={() => {
                     return this.context.authUser ? 
                     (<ProfileEdit />) : (<NoAuthNotAllowed />)
                  }} />
               </div>          
            </BrowserRouter>        
         </div>
      )
   }
}

export default App;
