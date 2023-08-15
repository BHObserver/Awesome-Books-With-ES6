import {
  bookArr, bookDisplay, addBook, removeBook,
} from './modules/functions.js';

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBook();
});

window.addEventListener('load', () => {
  const getJsonData = localStorage.getItem('form');
  if (getJsonData) {
    bookArr = JSON.parse(getJsonData);
  }
  bookDisplay();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  Book.addBook();
});
window.addEventListener('load', () => {
  const getJsonData = localStorage.getItem('form');
  if (getJsonData) {
    bookArr = JSON.parse(getJsonData);
  }
  Book.bookDisplay();
});

// SPA Navigation
window.setInterval(() => {
  const date = new Date();
  dateEl.innerHTML = date;
}, 1000);

listBtn.addEventListener('click', () => {
  bookSection.classList.add('active');
  bookSection.classList.remove('hiiden');
  addBookSection.classList.add('hidden');
  addBookSection.classList.remove('active');
  contactSection.classList.add('hidden');
  contactSection.classList.remove('active');

  listAnchor.classList.add('list-active');
  addAnchor.classList.remove('list-active');
  contactAnchor.classList.remove('list-active');
});

addBtn.addEventListener('click', () => {
  bookSection.classList.remove('active');
  bookSection.classList.add('hidden');
  addBookSection.classList.add('active');
  addBookSection.classList.remove('hidden');
  contactSection.classList.add('hidden');
  contactSection.classList.remove('active');

  listAnchor.classList.remove('list-active');
  addAnchor.classList.add('list-active');
  contactAnchor.classList.remove('list-active');
});

contactBtn.addEventListener('click', () => {
  bookSection.classList.add('hidden');
  bookSection.classList.remove('active');
  addBookSection.classList.remove('active');
  addBookSection.classList.add('hidden');
  contactSection.classList.add('active');
  contactSection.classList.remove('hidden');

  listAnchor.classList.remove('list-active');
  addAnchor.classList.remove('list-active');
  contactAnchor.classList.add('list-active');
});
