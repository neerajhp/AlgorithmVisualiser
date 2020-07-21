import './SortingCanvas.css';
import SortingAlgorithms from './Algorithms/AlgorithmList.js';
import React from 'react';
import SortCard from './SortCard';

const SortingCanvas = ({ algorithms }) => {
  //Create random array
  const randArray = Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * 100)
  );

  //Check if any algorithms selected
  const selectionMade = !algorithms.every((alg) => {
    return !alg;
  });

  //Default message if no algorithms selected
  var renderedItems = <div> Select an algorithm to get started</div>;

  if (selectionMade) {
    renderedItems = SortingAlgorithms.map((alg, i) => (
      <SortCard
        run={true}
        key={alg.name}
        selected={algorithms[i]}
        algorithm={alg}
        array={randArray}
      />
    ));
  }

  return <div className='sortingGrid'>{renderedItems}</div>;
};

export default SortingCanvas;
