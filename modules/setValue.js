import { bookContainer } from './selector.js';

const setValue = (library) => {
  const bookElements = library.books.map((book) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');

    const thebook = document.createElement('p');
    thebook.textContent = `"${book.title}" by ${book.author}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

    bookElement.appendChild(thebook);
    bookElement.appendChild(removeBtn);

    removeBtn.addEventListener('click', () => {
      const parentElement = removeBtn.closest('.book');
      parentElement.remove();
      library.removeBook(book);
      localStorage.setItem('storeddata', JSON.stringify(library.getBooks()));
    });

    return bookElement;
  });

  bookContainer.innerHTML = '';
  bookContainer.append(...bookElements);
};

export default setValue;