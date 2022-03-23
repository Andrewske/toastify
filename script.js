import Toast from './Toast.js';

document.querySelector('button').addEventListener('click', () => {
  const toast = new Toast({
    text: 'Hello',
    //position: 'bottom-center',
  });
});
