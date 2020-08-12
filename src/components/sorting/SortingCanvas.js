import './SortingCanvas.css';
import React from 'react';
import SortCard from './SortCard';
import RandArray from '../utils/RandArray';
import AlgorithmList from './Algorithms/AlgorithmList';

const ARRAY_SIZE = 40;
const SORT_SPEED = 100;
class SortingCanvas extends React.Component {
  constructor(props) {
    super(props);

    const array = RandArray(ARRAY_SIZE);

    this.state = {
      active: this.props.active,
      selectedAlgorithm: this.props.selectedAlgorithm,
      op: 0,
      array: array,
      algorithms: AlgorithmList,
      timer: 0,
    };
    this.sort(array);
  }

  sort(array) {
    AlgorithmList.forEach((alg) => {
      alg.stateList = [[array, 0, 1]];
      //time execution
      let start = performance.now();
      alg.func(alg.stateList);
      let end = performance.now();
      alg.perf = end - start;
      //Indicate array is sorted
      alg.stateList.push(0);
    });
  }

  reset() {
    this.setState({ active: false }, () => this.props.resetApp());
  }

  checkState() {
    //Sort finished
    if (this.state.selectedAlgorithm.stateList[this.state.op + 1] === 0) {
      return true;
    }
    return false;
  }

  animate() {
    this.sim = setInterval(() => {
      if (this.checkState() || !this.state.active) {
        clearInterval(this.sim);
        this.reset();
      } else {
        this.setState({ op: this.state.op + 1 });
      }
    }, SORT_SPEED);
  }

  componentDidUpdate() {
    if (this.state.selectedAlgorithm !== this.props.selectedAlgorithm) {
      this.setState({
        selectedAlgorithm: this.props.selectedAlgorithm,
        op: 0,
        algorithms: AlgorithmList,
      });
    }
    if (this.state.active !== this.props.active) {
      // Run Sorting animation
      if (!this.state.active) {
        this.setState({ active: this.props.active }, () => this.animate());
      } else {
        this.setState({ active: this.props.active });
      }
    }
  }

  render() {
    return (
      <div className='sortingGrid'>
        <SortCard
          algorithm={this.state.selectedAlgorithm}
          array={this.state.selectedAlgorithm.stateList[this.state.op]}
          finished={this.checkState()}
        />
      </div>
    );
  }
}

export default SortingCanvas;
