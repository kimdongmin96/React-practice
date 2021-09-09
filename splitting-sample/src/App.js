import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import loadable from '@loadable/component';

const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>
});


function App() {
  const [visible, setVisible] = useState(true);
  const onClick = () => {
    setVisible(!visible);
  };

  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver} style={{cursor: 'pointer', fontFamily:'cursive'}}>Hello React!</p>
        {visible && <SplitMe />}
      </header>
    </div>
  )
}

export default App;
