import './Sidebar.css';
import React from 'react';
import Checkbox from './Checkbox';
import SortingAlgorithms from './sorting/Algorithms';

const Sidebar = ({ canvasState, radioFn, sortCheckFn }) => {
  const updateType = radioFn;
  const updateSort = sortCheckFn;
  const selectedSortAlgs = canvasState.sAlgs;

  return (
    //Function to update algorithm type {Sorting, Pathfinding}
    <div className='ui left visible sidebar inverted vertical menu'>
      <div className='header'>
        <input
          type='radio'
          name='type'
          id='sorting'
          checked={'sorting' === canvasState.type}
          onChange={(e) => updateType(e.target.id)}
        />
        <label htmlFor='sorting'>Sorting Algorithms</label>

        <div className='ui list'>
          {SortingAlgorithms.map((alg, i) => (
            <Checkbox
              key={alg.name}
              algorithm={alg}
              checked={selectedSortAlgs[i]}
              updateFn={() => updateSort(i)}
            />
          ))}
        </div>

        <br />

        <input
          type='radio'
          name='type'
          id='pathfinding'
          checked={'pathfinding' === canvasState.type}
          onChange={(e) => updateType(e.target.id)}
        />
        <label htmlFor='pathfinding'>Pathfinding Algorithms</label>
      </div>
    </div>
  );
};

export default Sidebar;
