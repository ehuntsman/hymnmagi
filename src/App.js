import React from 'react';
import './App.css';
import "./app.scss";

import router from './router';

function App() {
  return (
    <div className="App">
      <div className="body-container">
        {router}
      </div>
    </div>
  );
}

export default App;
