import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDK5eSRyiJB4rdbvuKL0Q53qSQx7zwOSLE",
  authDomain: "bjj-app-d6860.firebaseapp.com",
  databaseURL: "https://bjj-app-d6860.firebaseio.com",
  projectId: "bjj-app-d6860",
  storageBucket: "bjj-app-d6860.appspot.com",
  messagingSenderId: "758652611617"
}
firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()