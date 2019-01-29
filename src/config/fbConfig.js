import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDK5eSRyiJB4rdbvuKL0Q53qSQx7zwOSLE",
  authDomain: "bjj-app-d6860.firebaseapp.com",
  databaseURL: "https://bjj-app-d6860.firebaseio.com",
  projectId: "bjj-app-d6860",
  storageBucket: "bjj-app-d6860.appspot.com",
  messagingSenderId: "758652611617"
}

firebase.initializeApp(config);

export default firebase