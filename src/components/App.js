import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import SortingCanvas from './sorting/SortingCanvas';
import PathfindingCanvas from './pathfinding/PathfindingCanvas';
import SortingAlgorithms from './sorting/Algorithms/AlgorithmList';
import PathfinderAlgorithms from './pathfinding/Algorithms/AlgorithmList';

const DEFAULT_CANVAS = 'sorting';

const SORT_SPEED = 80;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canvas: DEFAULT_CANVAS,
      sortingAlg: SortingAlgorithms[0],
      pfAlg: PathfinderAlgorithms[0],
      nodeClickMode: 'setOrigin',
      active: false,
      speed: SORT_SPEED,
      resetCanvas: false,
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
    this.setState({ active: !this.state.active, resetCanvas: false });
  };

  pause = () => {
    this.setState({ active: false });
  };

  resetCanvas = () => {
    if (this.state.active !== true) {
      if (this.state.canvas === 'sorting') {
        this.setState({ canvas: '', active: false }, () =>
          this.setState({ canvas: 'sorting' })
        );
      }
      if (this.state.canvas === 'pathfinding') {
        this.setState({ canvas: '', active: false }, () =>
          this.setState({ canvas: 'pathfinding' })
        );
      }
    }
  };

  getCanvas(container) {
    //Determine Canvas type
    var canvas = (
      <div className='ui segment' style={{ height: 100 + '%' }}>
        <div className='ui active dimmer'>
          <div className='ui text loader'>Loading</div>
        </div>
        <p></p>
      </div>
    );

    if (this.state.canvas === 'sorting') {
      canvas = (
        <SortingCanvas
          selectedAlgorithm={this.state.sortingAlg}
          active={this.state.active}
          pauseApp={() => this.pause()}
          speed={this.state.speed}
        />
      );
    }

    if (this.state.canvas === 'pathfinding') {
      canvas = (
        <PathfindingCanvas
          container={container}
          active={this.state.active}
          nodeClickMode={this.state.nodeClickMode}
          pauseApp={() => this.pause()}
          reset={this.state.resetCanvas}
          speed={this.state.speed}
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
