'use strict';

const logo = document.querySelector('.logo');
const div = document.createElement('div');


// -1-

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

// -2-

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
}).then(() => {
  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.append(div);
});

// const promise2 = new Promise((reject) => {

// });

