import { dateElement } from './selector.js';

import DateTime from '../node_modules/luxon/src/datetime.js';

const now = DateTime.now();
const addDate = () => {
  const formatted = now.toLocaleString({
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });
  dateElement.innerHTML = formatted;
};

export default addDate;