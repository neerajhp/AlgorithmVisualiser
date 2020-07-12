import './SortingCanvas.css';
import React from 'react';
import SortCard from './SortCard';

const SortingCanvas = () => {
  return (
    <div className='sortingGrid'>
      <SortCard />
      <SortCard />
      <SortCard />
      <SortCard />
    </div>
  );
};

export default SortingCanvas;
