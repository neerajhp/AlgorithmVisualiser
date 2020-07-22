import './SortingCanvas.css';
import React from 'react';
import SortCard from './SortCard';

const SortingCanvas = ({ selectedAlgorithm }) => {
  //Create random array
  const randArray = Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * 100)
  );

  return (
    <div className='sortingGrid'>
      <SortCard run={false} algorithm={selectedAlgorithm} array={randArray} />
    </div>
  );
};

export default SortingCanvas;
