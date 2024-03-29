import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Chart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      height={300}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
      sx={{
        // Add your custom styles here
        backgroundColor: '#fff', // Example background color
        borderRadius: '8px', // Example border radius
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Example box shadow
        padding: '20px', // Example padding
        // Add more styles as needed
      }}
    />
  );
}
