import { dateElement } from './selector.js';

import DateTime from '../luxon/src/datetime.js';

const myTimer = () => {
  const now = DateTime.now();
  dateElement.innerHTML = now.toLocaleString({
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });
};

export default myTimer;