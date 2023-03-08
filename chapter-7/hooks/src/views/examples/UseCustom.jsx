import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import { useCounter } from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

const UseRef = () => {
  const url = `http://files.cod3r.com.br/curso-react/estados.json`;
  const [count, inc, dec] = useCounter(100);
  const response = useFetch(url);

  function showStates(states) {
    console.log(`states`);
    return states?.map(state => (
      <li key={state.sigla}>
        {state.nome} - {state.sigla}
      </li>
    ));
  }
  return (
    <div className="UseCustom">
      <PageTitle title="Seu Hook" subtitle="Vamos aprender como criar o nosso próprio Hook!" />
      <SectionTitle title="Exercício #01" />
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
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <ul>{!response.loading && showStates(response.data)}</ul>
      </div>
    </div>
  );
};

export default UseRef;
