import React from 'react';
import { Paper } from '@mui/material';

const PieBorderComponent = ({ children }) => {
  return (
    <Paper elevation={10} sx={{ p: 2, maxWidth: 400, margin: 'auto', mt: 2, border: '1px solid #000', borderRadius: '8px' }}>
      {children}
    </Paper>
  );
};

export default PieBorderComponent;