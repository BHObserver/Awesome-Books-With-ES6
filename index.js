// index.js
import Book, { bookArr } from './modules/bookModule.js';
import setupNavigation from './modules/navigationModule.js';

/* const colorItem = document.querySelector('body'); */
const form = document.querySelector('form');
const bookInfo = document.querySelector('.all-books');
const title = document.querySelector('#input-title');
const author = document.querySelector('#input-author');
const dateEl = document.querySelector('.date');
const listBtn = document.querySelector('.list-btn');
const addBtn = document.querySelector('.add-btn');
const contactBtn = document.querySelector('.contact-btn');
const bookSection = document.querySelector('.books-list');
const addBookSection = document.querySelector('.add-book-form');
const contactSection = document.querySelector('.contact-info');
const listAnchor = document.querySelector('.list-anchor');
const addAnchor = document.querySelector('.add-anchor');
const contactAnchor = document.querySelector('.contact-anchor');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  Book.addBook(bookInfo, title, author);
});

window.addEventListener('load', () => {
  const getJsonData = localStorage.getItem('form');
  if (getJsonData) {
    bookArr.push(...JSON.parse(getJsonData));
  }

  Book.bookDisplay(bookInfo, title, author, Book);

  // Event listener for remove buttons
  bookInfo.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
      const index = parseInt(event.target.dataset.index, 10);
      if (!Number.isNaN(index)) {
        const bookElement = document.querySelector(`[data-book-id="${index}"]`);
        if (bookElement) {
          bookElement.remove();
        }
        Book.removeBook();
      }
    }
  });
});

// SPA Navigation setup
setupNavigation(listBtn, addBtn, contactBtn, bookSection, addBookSection, contactSection, listAnchor, addAnchor, contactAnchor);

// SPA Navigation
window.setInterval(() => {
  const date = new Date();
  dateEl.innerHTML = date;
}, 1000);