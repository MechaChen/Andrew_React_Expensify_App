import * as firebase from 'firebase';

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyDm94O7ke16AG0gA6gFYITId39zVAHOnSU",
  authDomain: "expensify-8bc2e.firebaseapp.com",
  databaseURL: "https://expensify-8bc2e.firebaseio.com",
  projectId: "expensify-8bc2e",
  storageBucket: "expensify-8bc2e.appspot.com",
  messagingSenderId: "287193477093",
  appId: "1:287193477093:web:098e3e389232564b70490c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
  name: 'Benson Chen',
  age: 25,
  isSingle: true,
  location: {
    city: 'Taichung',
    country: 'Taiwan',
  }
});

// database.ref().set('this is my data');

database.ref('age').set(27);
database.ref('location/city').set('Taipei');

// attributes
//  height
//  weight
database.ref('attributes').set({
  height: 175,
  weight: 75,
});