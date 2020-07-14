import React from 'react';
import SortingCanvas from './sorting/SortingCanvas';
import PathfindingCanvas from './pathfinding/PathfindingCanvas';

//Turn this into a component with states
class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Canvas: 'sorting' };
  }

  componentDidUpdate() {
    if (this.props.searchProperties !== this.state.Canvas) {
      this.setState({ Canvas: this.props.searchProperties });
    }
  }

  render() {
    var CanvasType;

    if (this.state.Canvas === 'sorting') {
      CanvasType = <SortingCanvas />;
    } else if (this.state.Canvas === 'pathfinding') {
      CanvasType = <PathfindingCanvas />;
    }

    return <div className='ui segment'>{CanvasType}</div>;
  }
}

export default Canvas;
