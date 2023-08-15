/* const colorItem = document.querySelector('body'); */
const bookInfo = document.querySelector('.all-books');
const title = document.querySelector('#input-title');
const author = document.querySelector('#input-author');

const bookArr = [];

const bookDisplay = () => {
  bookInfo.innerHTML = '';
  for (let i = 0; i < bookArr.length; i += 1) {
    const oneBook = document.createElement('div');
    oneBook.className = 'book';
    oneBook.innerHTML = `
        <p class="title">"${bookArr[i].title}" by ${bookArr[i].author}</p>
        <button class="remove" onclick="removeBook(${i})">Remove</button>
      `;
    bookInfo.appendChild(oneBook);
    title.value = '';
    author.value = '';
  }
};

const addBook = () => {
  const eachBook = {};
  eachBook.id = bookArr.length;
  eachBook.title = title.value;
  eachBook.author = author.value;

  bookArr.push(eachBook);
  bookDisplay();

  const jsonData = JSON.stringify(bookArr);
  localStorage.setItem('form', jsonData);
};

const removeBook = (index) => {
  bookArr.splice(index, 1);
  bookDisplay();
  const jsonData = JSON.stringify(bookArr);
  localStorage.setItem('form', jsonData);
};

export {
  bookArr, bookDisplay, addBook, removeBook,
};