import './Sidebar.css';
import React from 'react';
import SidebarAccordion from './SidebarAccordion';

const Sidebar = ({
  canvasState,
  updateType,
  updateSort,
  updatePathfinder,
  nodeClickFn,
  runFn,
  resetFn,
}) => {
  //Button labels
  var resetButton = 'reset-active';
  var buttonLabel = 'Visualise!';
  if (canvasState.active) {
    buttonLabel = 'Pause animation';
    resetButton = 'reset-disabled';
  }

  var resetLabel = 'Reset canvas';
  if (canvasState.canvas === 'sorting') {
    resetLabel = 'New Array';
  }

  return (
    <div className='ui left visible sidebar inverted vertical menu'>
      <div className='header'>
        <p>{'{'}</p>
        <p>
          Algorithm <br />
          Visualiser
        </p>
        <p>
          <br />
          {'}'}
        </p>
      </div>

      {/* Material UI Customised Accordion component */}
      <SidebarAccordion
        canvasState={canvasState}
        updateType={updateType}
        updateSort={updateSort}
        updatePathfinder={updatePathfinder}
        setNodeType={nodeClickFn}
      />

      <div className='control'>
        <button className='bouncy' onClick={() => runFn()}>
          {buttonLabel}
        </button>
        <button className={`${resetButton}`} onClick={() => resetFn()}>
          {resetLabel}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
