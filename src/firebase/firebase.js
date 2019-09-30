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

const onValueChange = database.ref().on('value', 
     (snapshot) => {
      console.log(snapshot.val())
    }, (e) => {
      console.log('Fetching Error', e);
    });

setTimeout(() => {
  database.ref('age').set(28);
}, 3500);

setTimeout(() => {
  database.ref().off('value', onValueChange);
}, 7000);

setTimeout(() => {
  database.ref('age').set(30);
}, 10500);

// database
//   .ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const value = snapshot.val();
//     console.log(value);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database
//   .ref()
//   .set({
//     name: 'Rebecca Wang',
//     age: 17,
//     stressLevel: 6,
//     job: {
//       title: 'Frontend Developer',
//       company: 'FarEast',

//     },
//     location: {
//       city: 'Taipei',
//       country: 'Taiwan',
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch((e) => {
//     console.log('This faild.', e);
//   });

// // Change the stressLevel to a 9
// // Change job.company to Amazon
// // Change location.city to Seattle
// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//   });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   })
//   .catch((e) => {
//     console.log('Did not remove data', e)
//   });