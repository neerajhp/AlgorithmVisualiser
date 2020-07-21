import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import ProgressBar from './ProgressBar';
import SortingAlgorithms from './sorting/Algorithms/AlgorithmList';

const DEFAULT_CANVAS = 'sorting';

class App extends React.Component {
  constructor(props) {
    super(props);

    //Get all written sorting algorithms
    const sArray = SortingAlgorithms.map((item) => item.checked);

    this.state = { canvas: DEFAULT_CANVAS, sAlgs: sArray, pfAlgs: [] };
  }

  //Update Canvas Algorithm Type
  updateType = (type) => {
    this.setState({ canvas: type });
  };

  //Update Canvas Algorithms
  updateSortAlgs = (alg) => {
    const sArray = this.state.sAlgs;
    sArray[alg] = !sArray[alg];

    this.setState({ sAlgs: sArray });
  };

  render() {
    return (
      <div className='structure'>
        <Sidebar
          canvasState={this.state}
          radioFn={this.updateType}
          sortCheckFn={this.updateSortAlgs}
        />
        <div className='interface'>
          <Canvas
            searchType={this.state.canvas}
            sortingState={this.state.sAlgs}
          />
          <ProgressBar />
        </div>
      </div>
    );
  }
}

export default App;
