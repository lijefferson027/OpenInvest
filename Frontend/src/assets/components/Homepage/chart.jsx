// Barchart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Scale } from 'chart.js/auto';

  
export default function Linechart({ data }, {options}) {
  return  <Line data={data} options={options}/>
}

