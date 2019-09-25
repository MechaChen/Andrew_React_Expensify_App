const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Benson',
      age: 25,
    });
  }, 5000);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
});

console.log('after');