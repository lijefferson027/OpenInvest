// Homepage.js
import React, { useState } from 'react';
import MiniDrawer from '../assets/components/sidebar';
import { Box } from '@mui/material';
import { UserData } from '../assets/components/Homepage/Data';
import Linechart from '../assets/components/Homepage/chart';
import './CSS/homepage.css'

const Homepage = () => {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.date),
    datasets: [
      {
        label: 'Users Networth',
        data: UserData.map((data) => data.amount),
        backgroundColor: [
            'rgba(52, 168, 83, 0.2)', // Start color (green)
            'rgba(255, 255, 255, 0.2)' // End color (white)
          ],    
        borderColor: '#37BE83',
        tension: 0.1,
        fill: true,
        maintainAspectRatio: false,
      }
    ]
  });

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <MiniDrawer />
        <div className="chartContainer">
        <Linechart data={userData} />
        </div>
      </Box>
    </>
  );
};

export default Homepage;
