import React, { useReducer, useState } from 'react';
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
    add_n: () => ({ ...state, number: state.number + action.payload }),
    interger: () => ({ ...state, number: parseInt(state.number) }),
    div_25: () => ({ ...state, number: state.number / 25 }),
    multi_7: () => ({ ...state, number: state.number * 7 }),
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
  const [n, setN] = useState(null);

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
          <button className="btn" onClick={() => dispatch({ type: 'multi_7' })}>
            x7
          </button>
          <button className="btn" onClick={() => dispatch({ type: 'div_25' })}>
            /25
          </button>
          <button className="btn" onClick={() => dispatch({ type: 'interger' })}>
            parseInt
          </button>
          <button className="btn" onClick={() => dispatch({ type: 'number_add2' })}>
            +2
          </button>

          <hr />
          <input type="text" className="input" value={n} onChange={e => setN(e.target.value)} />
          <button className="btn" onClick={() => dispatch({ type: 'add_n', payload: parseInt(n) })}>
            Add N
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
