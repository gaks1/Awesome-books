import {
  form, contact, contactSection, list, listBook, add1,
} from './selector.js';

export const listClick = () => {
  form.style.display = 'none';
  contactSection.style.display = 'none';
  listBook.style.display = 'flex';
  list.style.color = 'blue';
  add1.style.color = 'black';
  contact.style.color = 'black';
};

export const handleAddClick = () => {
  form.style.display = 'flex';
  contactSection.style.display = 'none';
  listBook.style.display = 'none';
  add1.style.color = 'blue';
  list.style.color = 'black';
  contact.style.color = 'black';
};

export const handleContactClick = () => {
  form.style.display = 'none';
  contactSection.style.display = 'flex';
  listBook.style.display = 'none';
  contact.style.color = 'blue';
  add1.style.color = 'black';
  list.style.color = 'black';
};
