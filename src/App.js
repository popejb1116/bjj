import React, { Component } from 'react';
//import 'materialize-css/dist/js/materialize'
import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/navigation/Navbar'

import Home from './components/content/Home'
import Forum from './components/content/forum/Forum'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/signUp/SignUp'
import SignOut from './components/auth/SignOut'
import ProfileEdit from './components/auth/ProfileEdit'
import AskQuestion from './components/content/forum/AskQuestion'
import SubmitReply from './components/content/forum/SubmitReply'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="router">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/forum" component={Forum} />
            
            {/* <Route path="/forum/ask" component={AskQuestion} />
            <Route path="/forum/reply" component={SubmitReply} />
            ADD AUTH CHECK  */}
            <Route path="/forum/ask" render={ () => {
               return <AskQuestion />
            }} />
            <Route path="/forum/reply" render={ () => {
               return <SubmitReply />
            }} />

            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signout" component={SignOut} />
            
            {/* PROTECT THIS PATH ALSO */}
            <Route path="/profile" component={ProfileEdit} />
          </div>          
        </BrowserRouter>        
      </div>
    )
  }
}

export default App;
