import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, CategoryScale } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { randomColorsList } from '../util/general';
import './GraphCalculator.css';
import PieChartUrl from '../resources/blue-pie-icon.png';
import BarChartUrl from '../resources/blue-bar-icon.png';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function GraphCalculator( { stamps, columnNames }) {
  const [chartType, setChartType] = React.useState(1);
  const [columnType, setColumnType] = React.useState('Release Year');

  console.log(chartType);

  const data = {
    labels: Object.keys(stamps[columnType]),
    datasets: [
      {
        label: '# of People',
        data: Object.keys(stamps[columnType]).map(key => stamps[columnType][key]),
        backgroundColor: randomColorsList(Object.keys(stamps[columnType]).length),
        borderColor: ['rgba(255, 255, 255, 1)'],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'left',
      },
      title: {
        display: true,
        text: columnType,
      },
    },
  };
  
  
  return (
    <>
      <div className='graphContainer'>
        { chartType === 1 && <Pie data={data} options={options} className='graph' /> }
        {/* { chartType === 2 && <Bar data={data} className='graph' /> } */}
      </div>
      <form className='graphForm'>
        <div className='dataType'>
          { columnNames.map(column => 
              <div key={column} className={`columnTypeContainer ${column === columnType && 'columnTypeSelected'}`}>
                <input
                  type='radio'
                  id={column}
                  value={column}
                  name='columnType'
                  className='radioChoice'
                  onClick={() => setColumnType(column)}
                />
                <label htmlFor={column} className='radioChoiceLabel'>{column}</label>
              </div>
          )}
        </div>
        <div className='chartType'>
          <input type='radio' id='radioPie' name='graphType' value={1} className='radioChoice' onClick={() => setChartType(1)} />
          <label htmlFor='radioPie'><img src={PieChartUrl} alt='Pie chart icon' className={`chartIcon ${chartType === 1 ? 'chartIconSelected' : ''}`} /></label>
          <input type='radio' id='radioBar' name='graphType' value={2} className='radioChoice' onClick={() => setChartType(2)} />
          <label htmlFor='radioBar'><img src={BarChartUrl} alt='Bar chart icon' className={`chartIcon ${chartType === 2 ? 'chartIconSelected' : ''}`} /></label>
        </div>
      </form>
    </>
  );
}

export default GraphCalculator;
