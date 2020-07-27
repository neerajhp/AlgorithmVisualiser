import './SortingCanvas.css';
import React from 'react';
import SortCard from './SortCard';
import RandArray from '../utils/RandArray';
import AlgorithmList from './Algorithms/AlgorithmList';

const ARRAY_SIZE = 10;
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
      alg.func(alg.stateList);
      //Indicate array is sorted
      alg.stateList.push(0);
    });
    console.log(AlgorithmList);
  }

  reset() {
    this.setState({ active: false }, () => this.props.resetApp());
  }

  checkState() {
    if (this.state.selectedAlgorithm.stateList[this.state.op + 1] === 0) {
      return true;
    }
    return false;
  }

  runSort() {
    this.sim = setInterval(() => {
      if (this.checkState() || !this.state.active) {
        clearInterval(this.sim);
        this.reset();
      } else {
        this.setState({ op: this.state.op + 1 });
      }
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.selectedAlgorithm !== this.props.selectedAlgorithm) {
      var newArray = RandArray(ARRAY_SIZE);
      this.setState({
        selectedAlgorithm: this.props.selectedAlgorithm,
        array: newArray,
        op: 0,
        algorithms: AlgorithmList,
      });
      this.sort(newArray);
    }
    if (this.state.active !== this.props.active) {
      // Run Sorting visualiser
      if (!this.state.active) {
        this.setState({ active: this.props.active }, () => this.runSort());
      } else {
        this.setState({ active: this.props.active });
      }
    }
  }

  render() {
    console.log(this.state.active);
    return (
      <div className='sortingGrid'>
        <SortCard
          algorithm={this.state.selectedAlgorithm}
          array={this.state.selectedAlgorithm.stateList[this.state.op]}
        />
      </div>
    );
  }
}

export default SortingCanvas;
