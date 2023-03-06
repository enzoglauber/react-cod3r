import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import { useCounter } from '../../hooks/useCounter';

const UseRef = () => {
  const [count, inc, dec] = useCounter(100);

  return (
    <div className="UseCustom">
      <PageTitle title="Seu Hook" subtitle="Vamos aprender como criar o nosso próprio Hook!" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button type="button" className="btn" onClick={() => inc()}>
            +1
          </button>
          <button type="button" className="btn" onClick={() => dec()}>
            -1
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
