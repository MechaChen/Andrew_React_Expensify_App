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

// in rules, set ".read" and ".write" to false

database
  .ref()
  .set({
    name: 'Benson Chen',
    age: 25,
    isSingle: true,
    location: {
      city: 'Taichung',
      country: 'Taiwan',
    }
  })
  .then(() => {
    console.log('Data is saved');
  })
  .catch((e) => {
    console.log('This faild.', e);
  });


// database
//   .ref('age')
//   .set(27);
// database
//   .ref('location/city')
//   .set('Taipei');

// setup then and catch
// make sure catch actually works
// switch rules to be open
// make sure that then runs

database
  .ref('attributes')
  .set({
    height: 175,
    weight: 75,
  })
  .then(() => {
    console.log('add attributes successfully!');
  })
  .catch((error) => {
    console.log(error);
  });