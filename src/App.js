import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js'; // Importamos componente Header
import Search from './Search.js';
const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Search />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));