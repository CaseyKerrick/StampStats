import React from 'react';
import './App.css';
import GraphCalculator from './modules/GraphCalculator';
import DisplayData from './modules/DisplayData';
import StampLogoUrl from './resources/stamp_logo.png';
import { data, columnNames, horrorTypes } from './data.js';
import { shapeStampData } from './util/transformStampData.js';


function App() {

  const [modifiedData, setModifiedData] = React.useState({});
  const [modifiedColumnNames, setModifiedColumnNames] = React.useState([]);
  const [selectedPage, setSelectedPage] = React.useState(0);

  React.useMemo(() => {
    const newModifiedData = shapeStampData(data);
    setModifiedData(newModifiedData);
    setModifiedColumnNames(Object.keys(newModifiedData));
  }, []);


  return (
    <div className="app">
      <header className="appHeader">
        <div className='headerTitle'>
          <div className='titleText'>Stamp</div>
          <div className='stampGuyContainer'><img src={StampLogoUrl} className='stampGuy' alt='A sillouette of a person on a stamp' /></div>
          <div className='titleText'>Stats</div>
        </div>
        <div className='navbar'>
          <div className={`navItem ${selectedPage === 0 && 'navItemSelected'}`} onClick={() => setSelectedPage(0)}>Charts</div>
          <div className={`navItem ${selectedPage === 1 && 'navItemSelected'}`} onClick={() => setSelectedPage(1)}>Raw Data</div>
          <div className={`navItem ${selectedPage === 2 && 'navItemSelected'}`} onClick={() => setSelectedPage(2)}>Stats</div>
        </div>
        <hr className='navSeparator' />
      </header>
      { selectedPage === 0 && <GraphCalculator stamps={modifiedData} columnNames={modifiedColumnNames} /> }
      { selectedPage === 1 && <DisplayData stamps={data} columnNames={['Last Name', 'First Names', ...columnNames]} horrors={horrorTypes} /> }
      
      {/* <div className='footer'>
        <a href="https://www.flaticon.com/free-icons/pie-chart" title="pie chart icons">Pie chart icons created by Pixel perfect - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/statistics" title="statistics icons">Statistics icons created by srip - Flaticon</a>
        <div> Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>

      </div> */}
    </div>
  );
}

export default App;
