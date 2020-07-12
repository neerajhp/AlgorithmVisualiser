import React from 'react';

const Sidebar = () => {
  return (
    <div className='ui left visible sidebar inverted vertical menu'>
      <div className='item'>
        <div className='header'> Sorting Algorithms</div>
        <div className='ui secondary vertical pointing menu'>
          <a className='item'>Merge Sort</a>
          <a className='item'>Heap Sort</a>
        </div>
      </div>
      <div className='item'>
        <div className='header'> Pathfinding Algorithms</div>
        <div className='algorithms'></div>
      </div>
    </div>
  );
};

export default Sidebar;
