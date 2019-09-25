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

database
  .ref('isSingle')
  .set(null);

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   })
//   .catch((e) => {
//     console.log('Did not remove data', e)
//   });