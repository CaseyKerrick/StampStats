import React from 'react';
import './App.css';
import GraphCalculator from './modules/GraphCalculator';
import StampLogoUrl from './resources/stamp_logo.png';
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
      </header>
      <GraphCalculator stamps={data} />
      {/* <div className='footer'>
        <a href="https://www.flaticon.com/free-icons/pie-chart" title="pie chart icons">Pie chart icons created by Pixel perfect - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/statistics" title="statistics icons">Statistics icons created by srip - Flaticon</a>
        <div> Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
        
      </div> */}
    </div>
  );
}

export default App;
