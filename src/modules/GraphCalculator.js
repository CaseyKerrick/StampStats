import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './GraphCalculator.css';
import PieChartUrl from '../resources/blue-pie-icon.png';
import BarChartUrl from '../resources/blue-bar-icon.png';

ChartJS.register(ArcElement, Tooltip, Legend);

function GraphCalculator( { stamps }) {
  const [chartType, setChartType] = React.useState(1);

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 3,
      },
    ],
  };

  
  
  return (
    <>
      <div className='graphContainer'>
        <Pie data={data} className='graph' />
      </div>
      <form className='graphForm'>
        <div className='type'>
          <input type='radio' id='radioPie' name='graphType' value={1} class='graphType' onClick={() => setChartType(1)} />
          <label for='radioPie'><img src={PieChartUrl} alt='Pie chart icon' className={`chartIcon ${chartType === 1 ? 'chartIconSelected' : ''}`} /></label>
          <input type='radio' id='radioBar' name='graphType' value={2} class='graphType' onClick={() => setChartType(2)} />
          <label for='radioBar'><img src={BarChartUrl} alt='Bar chart icon' className={`chartIcon ${chartType === 2 ? 'chartIconSelected' : ''}`} /></label>
        </div>
      </form>
    </>
  );
}

export default GraphCalculator;
