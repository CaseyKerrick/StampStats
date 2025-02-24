import React from 'react';
import './App.css';
import GraphCalculator from './modules/GraphCalculator';
import StampLogoUrl from './stamp_logo.png';
import { data } from './data.js';

function App() {

  return (
    <div className="app">
      <header className="appHeader">
        <div className='headerTitle'>
          <div className='titleText'>Stamp</div>
          <div className='stampGuyContainer'><img src={StampLogoUrl} className='stampGuy' /></div>
          <div className='titleText'>Stats</div>
        </div>
        <hr />
      </header>
      <GraphCalculator stamps={data} />
    </div>
  );
}

export default App;
