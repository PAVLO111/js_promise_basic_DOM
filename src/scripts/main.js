'use strict';

const logo = document.querySelector('.logo');
// const div = document.createElement('div');


// -1/1-

// const promise1 = new Promise((resolve) => {
//   logo.addEventListener('click', () => {
//     resolve();
//   });
// });

// promise1.then(() => {
//   div.className = 'message';
//   div.textContent = 'Promise was resolved!';
//   document.body.append(div);
// });

// -1/2-

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
}).then(() => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.append(div);
});

// -2/1-

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject();
//   }, 3000);
// }).catch(() => {
//   const div = document.createElement('div');

//   div.className = 'message';
//   div.className = 'error-message';
//   // div.classList = 'error-message';
//   div.textContent = 'Promise was rejected!';
//   document.body.append(div);
// });

// -2/2-

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
}).catch(() => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.append(div);
});

// -2/3

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('Promise was rejected!')); // Тепер тут об'єкт Error
//   }, 3000);
// }).catch(() => {
//   const errorDiv = document.createElement('div'); // Унікальне ім'я змінної

//   errorDiv.className = 'message error-message';
//   errorDiv.textContent = 'Promise was rejected!';
//   document.body.append(errorDiv);
// });

