import React from 'react';
import './DisplayData.css';

function DisplayData({ stamps, columnNames, horrors }) {



  return (
    <table>
      <tr className='tableHeader'>
        { columnNames.map(column => (<th>{column}</th>))}
      </tr>
      { stamps.map((stamp, index) => (
        <tr className={index % 2 === 0 ? 'whiteBackground' : 'grayBackground'}>
          { columnNames.map(column => (<td>{stamp[column]}</td>))}
        </tr>
      ))}
    </table>
  );
}

export default DisplayData;
