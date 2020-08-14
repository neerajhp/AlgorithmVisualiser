import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import SortingCanvas from './sorting/SortingCanvas';
import PathfindingCanvas from './pathfinding/PathfindingCanvas';
import SortingAlgorithms from './sorting/Algorithms/AlgorithmList';
import PathfinderAlgorithms from './pathfinding/Algorithms/AlgorithmList';
import RandArray from './utils/RandArray';

const DEFAULT_CANVAS = 'sorting';
const ARRAY_SIZE = 40;
const SORT_SPEED = 80;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canvas: DEFAULT_CANVAS,
      sortingAlg: SortingAlgorithms[0],
      sortingArray: RandArray(ARRAY_SIZE),
      pfAlg: PathfinderAlgorithms[0],
      nodeClickMode: 'setOrigin',
      active: false,
      speed: SORT_SPEED,
    };
  }

  //Update Canvas Algorithm Type
  updateType = (type) => {
    this.setState({ canvas: type });
  };

  //Update Canvas Algorithms
  updateSortAlgs = (alg) => {
    this.setState({ sortingAlg: alg });
  };

  //Update Canvas Algorithms
  updatePathfinderAlgs = (alg) => {
    this.setState({ pfAlg: alg });
  };

  setNodeType = (type) => {
    this.setState({ nodeClickMode: type });
  };

  runAlgorithm = () => {
    this.setState({ active: !this.state.active }, () =>
      console.log(this.state.active)
    );
  };

  pause = () => {
    this.setState({ active: false });
  };

  resetCanvas = () => {
    if (this.state.canvas === 'sorting') {
      this.setState({ active: false, sortingArray: RandArray(ARRAY_SIZE) });
    }
    if (this.state.canvas === 'pathfinding') {
      //Clear nodeList
    }
  };

  getCanvas(container) {
    //Determine Canvas type
    var canvas = (
      <SortingCanvas
        selectedAlgorithm={this.state.sortingAlg}
        array={this.state.sortingArray}
        active={this.state.active}
        pauseApp={() => this.pause()}
        speed={this.state.speed}
      />
    );

    if (this.state.canvas === 'pathfinding') {
      canvas = (
        <PathfindingCanvas
          container={container}
          active={this.state.active}
          nodeClickMode={this.state.nodeClickMode}
          pauseApp={() => this.pause()}
        />
      );
    }

    return canvas;
  }

  render() {
    return (
      <div className='structure'>
        <Sidebar
          canvasState={this.state}
          updateType={this.updateType}
          updateSort={this.updateSortAlgs}
          updatePathfinder={this.updatePathfinderAlgs}
          nodeClickFn={this.setNodeType}
          runFn={this.runAlgorithm}
          resetFn={this.resetCanvas}
        />
        <div className='interface' ref={(e) => (this.interface = e)}>
          {this.getCanvas(this.interface)}
        </div>
      </div>
    );
  }
}

export default App;
