import Book from './book.js';
import Library from './library.js';
import setValue from './setValue.js';

const loadLibraryFromLocalStorage = () => {
  let library2;
  if (localStorage.getItem('storeddata')) {
    library2 = new Library();
    const t = localStorage.getItem('storeddata');
    const data = JSON.parse(t);
    for (let i = 0; i < data.length; i += 1) {
      const bookData = new Book(data[i].title, data[i].author);
      library2.addBook(bookData);
    }
    setValue(library2);
  }
};

export default loadLibraryFromLocalStorage;