import './Sidebar.css';
import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.canvas;
  }

  render() {
    //Function to update algorithm type {Sorting, Pathfinding}
    var updateType = this.props.radioFn;
    return (
      <div className='ui left visible sidebar inverted vertical menu'>
        <div className='header'>
          <input
            type='radio'
            name='type'
            id='sorting'
            checked={'sorting' === this.props.canvas.type}
            onChange={(e) => updateType(e.target.id)}
          />
          <label htmlFor='sorting'>Sorting Algorithms</label>
          <div className='ui list'>
            <div className='item'>
              <input type='checkbox' name='sortAlg' id='heap' />
              <label htmlFor='heap'>Heap Sort </label>
            </div>
            <div className='item'>
              <input type='checkbox' name='sortAlg' id='merge' />
              <label htmlFor='merge'>Merge Sort </label>
            </div>
            <div className='item'>
              <input type='checkbox' name='sortAlg' id='quick' />
              <label htmlFor='quick'>Quick Sort </label>
            </div>
            <div className='item'>
              <input type='checkbox' name='sortAlg' id='bubble' />
              <label htmlFor='bubble'>Bubble Sort </label>
            </div>
          </div>
          <br />
          <input
            type='radio'
            name='type'
            id='pathfinding'
            checked={'pathfinding' === this.props.canvas.type}
            onChange={(e) => updateType(e.target.id)}
          />
          <label htmlFor='pathfinding'>Pathfinding Algorithms</label>
        </div>
      </div>
    );
  }
}

export default Sidebar;
