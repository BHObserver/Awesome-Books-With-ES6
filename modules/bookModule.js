// bookModule.js
export const bookArr = [];

export class Book {
  // ... other methods ...

  static bookDisplay(bookInfo, titleInput, authorInput, Book) {
    bookInfo.innerHTML = '';
    for (let i = 0; i < bookArr.length; i += 1) {
      // ... book display logic ...
      const oneBook = document.createElement('div');
      oneBook.className = 'book';
      oneBook.innerHTML = `
      <p class="title">"${bookArr[i].title}" by ${bookArr[i].author}</p>
      <button class="remove" data-index="${i}">Remove</button>`;
      oneBook.setAttribute('data-book-id', i);
      bookInfo.appendChild(oneBook);
      titleInput.value = '';
      authorInput.value = '';
    }
  }

  static addBook(bookInfo, titleInput, authorInput) {
    const eachBook = {};
    eachBook.id = bookArr.length;
    eachBook.title = titleInput.value;
    eachBook.author = authorInput.value;

    bookArr.push(eachBook);
    Book.bookDisplay(bookInfo, titleInput, authorInput);

    const jsonData = JSON.stringify(bookArr);
    localStorage.setItem('form', jsonData);
  }

  static removeBook(index) {
    bookArr.splice(index, 1);
    const jsonData = JSON.stringify(bookArr);
    localStorage.setItem('form', jsonData);
  }
}

export default Book;