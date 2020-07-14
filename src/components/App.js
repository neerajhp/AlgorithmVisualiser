import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import ProgressBar from './ProgressBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { type: 'sorting', sortingAlgs: [], pathfindingAlgs: [] };

    this.changeCanvas = React.createRef();
  }

  //Update Canvas Algorithm Type
  updateType = (type) => {
    this.setState({ type: type });
  };

  //Update Canvas Algorithms
  updateAlgs = (algs) => {};

  render() {
    return (
      <div className='structure'>
        <Sidebar canvas={this.state} radioFn={this.updateType} />
        <div className='interface'>
          <Canvas searchProperties={this.state.type} />
          <ProgressBar />
        </div>
      </div>
    );
  }
}

export default App;
