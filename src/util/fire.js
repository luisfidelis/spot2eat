import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCFbk_nFKWHIwwcY0p6iawPFda762jb09I",
  authDomain: "spot2eat-ce140.firebaseapp.com",
  databaseURL: "https://spot2eat-ce140.firebaseio.com",
  projectId: "spot2eat-ce140",
  storageBucket: "spot2eat-ce140.appspot.com",
  messagingSenderId: "596674863637"
};

export default firebase.initializeApp(config).database().ref();