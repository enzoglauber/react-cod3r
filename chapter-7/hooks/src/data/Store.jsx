import React, { useState } from 'react';
const initialState = {
  number: 1234,
  text: 'ContextApi + Hooks'
};

export const AppContext = React.createContext(null);

const Store = props => {
  const [state, setState] = useState(initialState);

  function updateState(key, value) {
    setState(current => ({
      ...current,
      [key]: value
    }));
  }

  return (
    <AppContext.Provider
      value={{
        number: state.number,
        text: state.text,
        setNumber: number => updateState('number', number),
        setText: text => updateState('text', text)
      }}>
      <div>{props.children}</div>;
    </AppContext.Provider>
  );
};

export default Store;
