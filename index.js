import Book, { bookArr } from './modules/bookModule.js';
import setupNavigation from './modules/navigationModule.js';
import setTime from './modules/dateTime.js';

const form = document.querySelector('form');
const bookInfo = document.querySelector('.all-books');
const title = document.querySelector('#input-title');
const author = document.querySelector('#input-author');
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
      const id = event.target.dataset.bookId;
      const bookElement = document.querySelector(`[data-book-id="${`${id}`}"]`);
      if (bookElement) {
        bookElement.parentElement.remove();
      }
      bookArr.forEach((item) => {
        if (item.id === id) Book.removeBook(bookArr.indexOf(item));
      });
    }
  });
});

setupNavigation(
  listBtn,
  addBtn,
  contactBtn,
  bookSection,
  addBookSection,
  contactSection,
  listAnchor,
  addAnchor,
  contactAnchor,
);

setTime();