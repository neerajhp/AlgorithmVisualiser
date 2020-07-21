import './SortCard.css';
import React from 'react';
import Graph from './Graph';
import SelectionSort from './Algorithms/SelectionSort';
class SortCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      run: this.props.run,
      algorithm: this.props.algorithm,
      enterArray: this.props.array,
      leaveArray: this.props.array,
    };
  }

  componentDidMount() {
    if (this.state.run) {
      this.state.algorithm.func(this.state.enterArray, this.updateGraph);
    }
  }

  updateGraph = (i, min) => {
    console.log('Swapped ' + this.state.leaveArray);
    var tmpArray = this.state.leaveArray;
    let tmp = tmpArray[i];
    tmpArray[i] = tmpArray[min];
    tmpArray[min] = tmp;

    this.setState({ enterArray: this.state.leaveArray, leaveArray: tmpArray });
    return tmpArray;
  };

  render() {
    const inactive = this.props.selected ? '' : 'inactive';

    return (
      <div className={`ui segment sortCard ${inactive}`}>
        <div>{this.state.algorithm.label}</div>
        <Graph
          algorithm={this.state.algorithm}
          enterArray={this.state.enterArray}
          leaveArray={this.state.leaveArray}
        />
        <div>Algorithm Info</div>
      </div>
    );
  }
}

export default SortCard;
