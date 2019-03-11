import React, { Component } from 'react';
import 'materialize-css/dist/js/materialize'
import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/navigation/Navbar'

import Home from './components/content/Home'
import Forum from './components/content/Forum'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/signUp/SignUp'
import SignOut from './components/auth/SignOut'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="router">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/forum" component={Forum} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signout" component={SignOut} />
          </div>          
        </BrowserRouter>        
      </div>
    )
  }
}

export default App;
