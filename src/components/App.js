import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import SortingAlgorithms from './sorting/Algorithms/AlgorithmList';
import PathfinderAlgorithms from './pathfinding/Algorithms/AlgorithmList';

const DEFAULT_CANVAS = 'sorting';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canvas: DEFAULT_CANVAS,
      sortingAlg: SortingAlgorithms[0],
      pfAlg: PathfinderAlgorithms[0],
      active: false,
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
    console.log(alg);
    this.setState({ pfAlg: alg });
  };

  runAlgorithm = () => {
    this.setState({ active: !this.state.active }, () =>
      console.log(this.state.active)
    );
  };

  reset() {
    console.log('Resetting App ');
    this.setState({ active: false });
  }

  render() {
    return (
      <div className='structure'>
        <Sidebar
          canvasState={this.state}
          updateType={this.updateType}
          updateSort={this.updateSortAlgs}
          updatePathfinder={this.updatePathfinderAlgs}
          runFn={this.runAlgorithm}
        />
        <div className='interface' ref={(e) => (this.interface = e)}>
          <Canvas
            searchType={this.state.canvas}
            sortingAlg={this.state.sortingAlg}
            active={this.state.active}
            resetApp={() => this.reset()}
            container={this.interface}
          />
        </div>
      </div>
    );
  }
}

export default App;
