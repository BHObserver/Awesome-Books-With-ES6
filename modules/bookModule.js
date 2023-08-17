export const bookArr = [];

class Book {
  static bookDisplay(bookInfo, titleInput, authorInput) {
    bookInfo.innerHTML = '';
    for (let i = 0; i < bookArr.length; i += 1) {
      const oneBook = document.createElement('div');
      oneBook.className = 'book';
      oneBook.innerHTML = `
      <p class="title">"${bookArr[i].title}" by ${bookArr[i].author}</p>
      <button class="remove" data-book-id="${bookArr[i].id}">Remove</button>`;
      bookInfo.appendChild(oneBook);
      titleInput.value = '';
      authorInput.value = '';
    }
  }

  static addBook(bookInfo, titleInput, authorInput) {
    const eachBook = {};
    const uniqueId = Math.floor(Math.random() * (10 ** 8)).toString(16);
    eachBook.id = uniqueId;
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