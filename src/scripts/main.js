'use strict';

const logo = document.querySelector('.logo');
const div = document.createElement('div');

// div.className = 'message';

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    // const message = document.createElement('div');
    div.className = 'message';
    div.textContent = 'Promise was resolved!';
    document.body.append(div);
  });
});

const promise2 = new Promise((reject) => {

});

