import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = ({ data, title }) => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          label: data.datasets[0].labels,
          data: data.datasets[0].data,
          backgroundColor: data.datasets[0].backgroundColor, // Adjust colors as needed
          borderColor: data.datasets[0].borderColor,
          borderWidth: data.datasets[0].borderWidth
      }], 
          labels: data.labels
      },
      options: {
        responsive: true,
        plugins: {
        title: {
            display: true,
            text: title || 'Doughnut Chart Example'
              },
          legend: {
            position: 'bottom',
          },
          
        }
      }
    });

    return () => {
      chart.destroy();
    };
  }, [data, title]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default DoughnutChart;
