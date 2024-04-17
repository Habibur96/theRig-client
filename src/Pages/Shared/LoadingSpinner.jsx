import React from 'react';
import { CircularProgress } from '@mui/material'; // assuming you're using Material-UI

const LoadingSpinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <CircularProgress color="secondary" size={60} thickness={4} /> {/* You can adjust size and thickness */}
    </div>
  );
};

export default LoadingSpinner;
