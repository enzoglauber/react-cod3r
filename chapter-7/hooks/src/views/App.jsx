import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';
import DataContext, { data } from '../data/DataContext';

const App = () => {
  const [state, setState] = useState(data);

  return (
    <DataContext.Provider value={{ state, setState }}>
      <div className="App">
        <Router>
          <Menu />
          <Content />
        </Router>
      </div>
    </DataContext.Provider>
  );
};

export default App;
