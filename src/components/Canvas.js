import React from 'react';
import SortingCanvas from './sorting/SortingCanvas';
import PathfindingCanvas from './pathfinding/PathfindingCanvas';

//Turn this into a component with states

const Canvas = ({ searchType, sortingAlg, active, resetApp, container }) => {
  //Determine Canvas type
  var canvas = (
    <SortingCanvas
      selectedAlgorithm={sortingAlg}
      active={active}
      resetApp={() => resetApp()}
    />
  );

  if (searchType === 'pathfinding') {
    canvas = (
      <PathfindingCanvas
        container={container}
        active={active}
        resetApp={() => resetApp()}
      />
    );
  }

  return canvas;
};

export default Canvas;
