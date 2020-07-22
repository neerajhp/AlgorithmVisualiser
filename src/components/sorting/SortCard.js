import './SortCard.css';
import React from 'react';
import Graph from './Graph';
class SortCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      run: this.props.run,
      algorithm: this.props.algorithm,
      enterArray: [...this.props.array],
      leaveArray: [...this.props.array],
      func: this.props.func,
    };
  }

  componentDidMount() {
    this.setState({ run: true });
  }

  componentDidUpdate() {
    if (this.state.algorithm !== this.props.algorithm) {
      this.setState({
        algorithm: this.props.algorithm,
        enterArray: [...this.props.array],
        leaveArray: [...this.props.array],
      });
    }
    if (this.state.run) {
      this.setState({
        run: this.state.algorithm.func(this.state.enterArray, this.updateGraph),
      });
    }
  }

  setStateSynchronous(stateUpdate) {
    return new Promise((resolve) => {
      this.setState(stateUpdate, () => resolve());
    });
  }

  updateGraph = async (i, min) => {
    console.log('Swap ');
    const tmpArray = [...this.state.leaveArray];
    // console.log('tmp Before ' + tmpArray);
    let tmp = tmpArray[i];
    tmpArray[i] = tmpArray[min];
    tmpArray[min] = tmp;

    // console.log('tmp After ' + tmpArray);
    console.log('leave before ' + this.state.leaveArray);
    await this.setStateSynchronous((state) => ({
      enterArray: [...this.state.leaveArray],
      leaveArray: [...tmpArray],
    }));
    console.log('leave after ' + this.state.leaveArray);

    return tmpArray;
  };

  render() {
    console.log('Rendering ');
    return (
      <div className='ui segment sortCard'>
        <div>{this.state.algorithm.label}</div>
        <Graph
          enterArray={this.state.enterArray}
          leaveArray={this.state.leaveArray}
        />
        <div>Algorithm Info</div>
      </div>
    );
  }
}

export default SortCard;
