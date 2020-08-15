import './SortingCanvas.css';
import React from 'react';
import SortCard from './SortCard';
import AlgorithmList from './Algorithms/AlgorithmList';
import RandArray from '../utils/RandArray';

const ARRAY_SIZE = 40;
class SortingCanvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.active,
      selectedAlgorithm: this.props.selectedAlgorithm,
      op: 0,
      array: RandArray(ARRAY_SIZE),
      algorithms: AlgorithmList,
    };
    this.sort(this.state.array);
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

  sort(array) {
    AlgorithmList.forEach((alg) => {
      alg.stateList = [[array, 0, 1]];
      alg.func(alg.stateList);

      //Indicate array is sorted
      alg.stateList.push(0);
    });
  }

  pause() {
    this.setState({ active: false }, () => this.props.pauseApp());
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
        this.pause();
      } else {
        this.setState({ op: this.state.op + 1 });
      }
    }, this.props.speed);
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
