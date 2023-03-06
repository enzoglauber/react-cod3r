import { useState } from 'react';

export const useCounter = initialValue => {
  const [count, setCount] = useState(initialValue);

  function inc() {
    setCount(current => current + 1);
  }
  function dec() {
    setCount(current => current - 1);
  }
  return [count, inc, dec];
};
