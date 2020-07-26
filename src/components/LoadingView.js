import React from 'react';
import { Ring } from 'react-spinners-css';

const LoadingView = () => (
  <div style={{ display: 'flex' }}>
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Ring color='#596e79' size={175} />
      <h3
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          paddingTop: '175px',
        }}
      >
        Loading...
      </h3>
    </div>
  </div>
);

export default LoadingView;
