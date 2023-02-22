import { listClick, handleAddClick, handleContactClick } from './modules/navclick.js';
import {
  add, list, add1, contact,
} from './modules/selector.js';
import loadLibraryFromLocalStorage from './modules/onload.js';
import myTimer from './modules/addDate.js';
import populateStorage from './modules/populateStorage.js';

add.addEventListener('click', () => {
  populateStorage();
});

setInterval(myTimer, 1000);

loadLibraryFromLocalStorage();
list.addEventListener('click', listClick);
add1.addEventListener('click', handleAddClick);
contact.addEventListener('click', handleContactClick);
