import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import ProgressBar from './ProgressBar';

const App = () => {
  return (
    <div className='structure'>
      <Sidebar />
      <div className='interface'>
        <Canvas />
        <ProgressBar />
      </div>
    </div>
  );
};

export default App;
