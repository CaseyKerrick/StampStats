import React from 'react';
import './App.css';
import GraphCalculator from './modules/GraphCalculator';
import StampLogoUrl from './resources/stamp_logo.png';
import { data, columnNames } from './data.js';
import { createMultiList } from './util/transformStampData.js';

function App() {
  const [modifiedData, setModifiedData] = React.useState({});
  const [modifiedColumnNames, setModifiedColumnNames] = React.useState([]);


  React.useMemo(() => {
    const newModifiedData = {
      'Release Year': createMultiList(data.map(person => person['Release Year']).join(', ').split(', ')),
      'Gender': createMultiList(data.map(person => person['Gender'])),
      'Profession': createMultiList(data.map(person => person['Profession']).join(', ').split(', ')),
      'Race': createMultiList(data.map(person => person['Race'])),
      'Sun Sign': createMultiList(data.map(person => person['Sun Sign'])),
      'LGBTQ': createMultiList(data.map(person => person['LGBTQ'])),
      'State of Birth': createMultiList(data.map(person => person['State of Birth'])),
      'Country of Birth': createMultiList(data.map(person => person['Country of Birth'])),
      'Offenses': {
        'Eugenicist': data.filter(person => person['Eugenicist'] === 'Yes').length,
        'Embezzler': data.filter(person => person['Embezzler'] === 'Yes').length,
        'Child SA': data.filter(person => person['Child SA'] === 'Yes').length,
        'DV': data.filter(person => person['DV'] === 'Yes').length,
        'Enslaver': data.filter(person => person['Enslaver'] === 'Yes').length,
        'Known Racist': data.filter(person => person['Known Racist'] === 'Yes').length,
        'None': data.filter(person => person['Eugenicist'] !== 'Yes'
                                        && person['Embezzler'] !== 'Yes'
                                        && person['Child SA'] !== 'Yes'
                                        && person['DV'] !== 'Yes'
                                        && person['Enslaver'] !== 'Yes'
                                        && person['Known Racist'] !== 'Yes').length,
      },
    };

    console.log(newModifiedData['Offenses']['None']);

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
      </header>
      <GraphCalculator stamps={modifiedData} columnNames={modifiedColumnNames} />
      {/* <div className='footer'>
        <a href="https://www.flaticon.com/free-icons/pie-chart" title="pie chart icons">Pie chart icons created by Pixel perfect - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/statistics" title="statistics icons">Statistics icons created by srip - Flaticon</a>
        <div> Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>

      </div> */}
    </div>
  );
}

export default App;
