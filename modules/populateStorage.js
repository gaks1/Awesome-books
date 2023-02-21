import Book from './book.js';
import Library from './library.js';
import { titleInput, author, bookContainer } from './selector.js';

import setValue from './setValue.js';

const populateStorage = () => {
  let library1;
  if (localStorage.getItem('storeddata')) {
    library1 = new Library();
    const t = localStorage.getItem('storeddata');
    const data = JSON.parse(t);
    for (let i = 0; i < data.length; i += 1) {
      const bookData = new Book(data[i].title, data[i].author);
      library1.addBook(bookData);
    }
  } else {
    library1 = new Library();
  }
  const bookData = new Book(titleInput.value, author.value);
  titleInput.value = '';
  author.value = '';
  library1.addBook(bookData);
  localStorage.setItem('storeddata', JSON.stringify(library1.getBooks()));
  bookContainer.innerHTML = '';
  setValue(library1);
};
export default populateStorage;