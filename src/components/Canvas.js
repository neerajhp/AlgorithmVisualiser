import React from 'react';
import SortingCanvas from './sorting/SortingCanvas';
import PathfindingCanvas from './pathfinding/PathfindingCanvas';

//Turn this into a component with states
class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: this.props.searchType,
      sortingAlg: this.props.sortingAlg,
    };
  }

  componentDidUpdate() {
    //Update canvas
    if (this.props.searchType !== this.state.canvas) {
      this.setState({ canvas: this.props.searchType });
    }
    //Update sorting algorithms
    if (this.props.sortingAlg !== this.state.sortingAlg) {
      this.setState({ sortingAlg: this.props.sortingAlg });
    }
  }

  renderContent() {
    // Render sorting algorithm canvas
    if (this.state.canvas === 'sorting') {
      return <SortingCanvas selectedAlgorithm={this.state.sortingAlg} />;

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
