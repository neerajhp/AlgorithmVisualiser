import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import ProgressBar from './ProgressBar';
import SortingAlgorithms from './sorting/Algorithms';

class App extends React.Component {
  constructor(props) {
    super(props);

    //Get all written sorting algorithms
    const sArray = SortingAlgorithms.map((item) => item.checked);

    this.state = { type: 'sorting', sAlgs: sArray, pfAlgs: [] };
  }

  //Update Canvas Algorithm Type
  updateType = (type) => {
    this.setState({ type: type });
  };

  //Update Canvas Algorithms
  updateSortAlgs = (alg) => {
    const sArray = this.state.sAlgs;
    sArray[alg] = !sArray[alg];

    this.setState({ sAlgs: sArray });
    console.log(this.state.sAlgs); //CONSOLE LOG
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
          <Canvas searchProperties={this.state.type} />
          <ProgressBar />
        </div>
      </div>
    );
  }
}

export default App;
