import React, { Component } from 'react';
//import './App.css'
import { BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/navigation/Navbar'

import Home from './components/content/Home'
import Forum from './components/content/Forum'
import Auth from './components/auth/Auth'
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
            <Route path="/auth" component={Auth} />
            <Route path="/signout" component={SignOut} />
          </div>          
        </BrowserRouter>        
      </div>
    )
  }
}

export default App;
