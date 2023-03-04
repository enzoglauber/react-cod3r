import React, { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle';

const initialState = {
  other: '...',
  cart: [],
  products: [],
  user: null,
  // foco
  number: 0
};

function reducer(state, action) {
  const actions = {
    number_add2: () => ({ ...state, number: state.number + 2 }),
    login: () => ({ ...state, user: action.payload.user })
  };

  return {
    default: state,
    ...actions
  }[action.type || 'default']();
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle title="Hook UseReducer" subtitle="Uma outra forma de ter estado em componentes funcionais!" />
      <div className="center">
        {state.user ? <span className="text">{state.user?.name}</span> : <span className="text">Sem usuário</span>}

        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={() => dispatch({ type: 'login', payload: { user: { name: 'Maria' } } })}>
            Login
          </button>
          <button className="btn" onClick={() => dispatch({ type: 'number_add2' })}>
            +2
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
