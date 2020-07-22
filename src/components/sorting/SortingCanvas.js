import './SortingCanvas.css';
import SortingAlgorithms from './Algorithms/AlgorithmList.js';
import React from 'react';
import SortCard from './SortCard';

const SortingCanvas = ({ selectedAlgorithms }) => {
  //Create random array
  const randArray = Array.from({ length: 20 }, () =>
    Math.floor(Math.random() * 100)
  );

  //Check if any algorithms selected
  const selectionMade = !selectedAlgorithms.every((alg) => {
    return !alg;
  });

  //Default message if no algorithms selected
  var renderedItems = <div> Select an algorithm to get started</div>;

  if (selectionMade) {
    renderedItems = SortingAlgorithms.map((alg, i) => (
      <SortCard
        run={true}
        key={alg.name}
        selected={selectedAlgorithms[i]}
        algorithm={alg}
        array={randArray}
      />
    ));
  }
  return <div className='sortingGrid'>{renderedItems}</div>;
};

export default SortingCanvas;
