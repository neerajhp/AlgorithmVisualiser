import React from 'react';
import SortingCanvas from './sorting/SortingCanvas';
import PathfindingCanvas from './pathfinding/PathfindingCanvas';

//Turn this into a component with states
class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: this.props.searchType,
      sortingState: this.props.sortingState,
    };
  }

  componentDidUpdate() {
    //Update canvas
    if (this.props.searchType !== this.state.canvas) {
      this.setState({ canvas: this.props.searchType });
    }
    //Update sorting algorithms
    if (this.props.sortingState !== this.state.sortingState)
      this.setState({ sortingState: this.props.sortingState });
  }

  renderContent() {
    // Render sorting algorithm canvas
    if (this.state.canvas === 'sorting') {
      return <SortingCanvas selectedAlgorithms={this.state.sortingState} />;

      // Render pathfinding algorithm campas
    } else if (this.state.canvas === 'pathfinding') {
      return <PathfindingCanvas />;
    }
  }

  render() {
    return <div className='ui segment'>{this.renderContent()}</div>;
  }
}

export default Canvas;
