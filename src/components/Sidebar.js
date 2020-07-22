import './Sidebar.css';
import React from 'react';
import SortingAlgorithms from './sorting/Algorithms/AlgorithmList';

const Sidebar = ({ canvasState, updateType, updateSort, runFn }) => {
  var sorting = '';
  var pathfinding = '';

  // Very simple accordion conditional
  if (canvasState.canvas === 'sorting') {
    sorting = 'active';
  } else {
    pathfinding = 'active';
  }

  // Play icon
  var icon = 'play';
  if (canvasState.active) {
    icon = 'pause';
  }

  return (
    //Function to update algorithm type {Sorting, Pathfinding}
    <div className='ui left visible sidebar inverted vertical menu'>
      <div className='ui accordion'>
        <div
          className={`title ${sorting} `}
          onClick={() => updateType('sorting')}
        >
          Sorting Algorithms
        </div>
        <div className={`content ${sorting} `}>
          <div className='ui list'>
            {SortingAlgorithms.map((alg) => (
              <React.Fragment key={alg.name}>
                <input
                  type='radio'
                  name='sorting-algorithms'
                  id={alg.name}
                  checked={alg === canvasState.sortingAlg}
                  onChange={(e) => updateSort(alg)}
                />
                <label htmlFor={alg.name}>{alg.label}</label>
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>

        <br />

        <div
          className={`title ${pathfinding}`}
          onClick={() => updateType('pathfinding')}
        >
          Pathfinding Algorithms
        </div>
      </div>

      <div className='control'>
        <button onClick={() => runFn()}>
          <i className={`huge green ${icon} circle outline icon`} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
