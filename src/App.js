import React, { Component } from 'react';
//import './App.css'
import { BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/navigation/Navbar'

import Home from './components/content/Home'
import UpcomingEvents from './components/content/UpcomingEvents'
import Forum from './components/content/Forum'
import Auth from './components/auth/Auth'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="router">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/upcoming" component={UpcomingEvents} />
            <Route path="/forum" component={Forum} />
            <Route path="/auth" component={Auth} />
          </div>          
        </BrowserRouter>        
      </div>
    )
  }
}

export default App;
