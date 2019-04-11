const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest( (request, response) => {
 response.send("Hello from Firebase!");
});

exports.newUserJoined = functions.auth.user().onCreate( user => {
   console.log('A new user signed up!!')
   
   return admin.firestore().collection('users').doc(user.uid).get()
   .then(userDoc => {
      const newUser = userDoc.data()      
      const notification = {
         content: 'New User Joined',
         user: `${newUser.firstName} ${newUser.lastName}`,
         //time: admin.firestore().FieldValue.serverTimestamp()
      }

      return admin.firestore().collection('notifications').add(notification)
     
   })
   .then(() => {
      console.log('notification add... maybe???')
      //FIREBASE 
      return true
   })
   .catch(error => {
      console.log('newUser ERROR: ' + error)
   })   
})