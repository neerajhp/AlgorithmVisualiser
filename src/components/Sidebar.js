import './Sidebar.css';
import React from 'react';
import SidebarAccordion from './SidebarAccordion';

const Sidebar = ({
  canvasState,
  updateType,
  updateSort,
  updatePathfinder,
  runFn,
}) => {
  // Play icon
  var icon = 'play';
  if (canvasState.active) {
    icon = 'pause';
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
      />

      <div className='control'>
        <button className='bouncy' onClick={() => runFn()}>
          Visualise!
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
