import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(res => setData(res.message))
  },
    [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {!data ? 'Loading...' : data}
      </header>
    </div>
  );
}

export default App;
