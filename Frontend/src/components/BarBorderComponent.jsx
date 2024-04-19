import React from 'react';
import { Paper } from '@mui/material';

const BarBorderComponent = ({ children }) => {
  return (
    <Paper elevation={4} sx={{ p: 1, maxWidth: 1000, margin: 'auto', mt: 1, border: '1px solid #000', borderRadius: '8px' }}>
      {children}
    </Paper>
  );
};

export default BarBorderComponent;