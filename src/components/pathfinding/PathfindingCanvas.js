import React from 'react';
import Node from './Node';
import './PathfindingCanvas.css';

const NODE_DIM = 25;
class PathfindingCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: null,
      onClickMode: 'setOrigin',
      origin: { x: 0, y: 0 },
      destination: { x: 0, y: 0 },
      nodeList: this.constructNodeList(this.props.container),
    };
  }

  componentDidMount() {
    const nodeList = this.constructNodeList(this.props.container);

    this.setState({
      dimensions: {
        width: this.props.container.clientWidth,
        height: this.props.container.clientHeight,
      },
      nodeList: [...nodeList],
    });

    //Event listener for window resize
    window.addEventListener('resize', this.updateDimensions);
  }

  constructNodeList(dimensions) {
    // Get node max indices
    const max_x = Math.floor(dimensions.clientWidth / NODE_DIM) - 1;
    const max_y = Math.floor(dimensions.clientHeight / NODE_DIM) - 1;
    var list = [];
    for (let i = 0; i < max_x; i++) {
      list.push([]);
      for (let j = 0; j < max_y; j++) {
        list[i].push(['']);
      }
    }
    return list;
  }

  //Update grid size
  updateDimensions = () => {
    const nodeList = this.constructNodeList(this.props.container);

    this.setState({
      dimensions: {
        width: this.props.container.clientWidth,
        height: this.props.container.clientHeight,
      },
      nodeList: [...nodeList],
    });
  };

  setOrigin = (node) => {
    const newNodes = [...this.state.nodeList];
    newNodes[this.state.origin.x][this.state.origin.y] = '';
    newNodes[node.x][node.y] = 'origin';
    this.setState({
      origin: { x: node.x, y: node.y },
      onClickMode: 'setDestination',
    });
  };

  setDestination = (node) => {
    const newNodes = [...this.state.nodeList];
    newNodes[this.state.destination.x][this.state.destination.y] = '';
    newNodes[node.x][node.y] = 'destination';
    this.setState({
      destination: { x: node.x, y: node.y },
      onClickMode: 'setDestination',
      nodeList: [...newNodes],
    });
  };

  setObstacle = (node) => {
    this.setState(
      {
        obstacles: [...this.state.obstacles, ...[node.x, node.y]],
      },
      console.log(this.state.obstacles)
    );
  };

  getOnClickFn() {
    if (this.state.onClickMode === 'setOrigin') return this.setOrigin;
    if (this.state.onClickMode === 'setDestination') return this.setDestination;
    if (this.state.onClickMode === 'setObstacle') return this.setObstacle;
  }

  constructGrid(dimensions) {
    if (dimensions === null) {
      return (
        <div className='ui segment' style={{ height: 100 + '%' }}>
          <div className='ui active dimmer'>
            <div className='ui text loader'>Loading</div>
          </div>
          <p></p>
        </div>
      );
    }
    // Get node max indices
    const max_x = Math.floor(dimensions.width / NODE_DIM) - 1;
    const max_y = Math.floor(dimensions.height / NODE_DIM) - 1;
    //Map array
    const xArray = Array.from({ length: max_x }, (x, i) => i);
    const yArray = Array.from({ length: max_y }, (y, i) => i);

    return (
      <div
        className='grid'
        style={{ height: max_y * NODE_DIM, width: max_x * NODE_DIM }}
      >
        {yArray.map((y) =>
          xArray.map((x) => {
            var type = this.state.nodeList[x][y];

            return (
              <Node
                key={[x, y]}
                x={x}
                y={y}
                onClickFn={this.getOnClickFn()}
                nodeType={type}
              />
            );
          })
        )}
      </div>
    );
  }

  render() {
    return this.constructGrid(this.state.dimensions);
  }
}

export default PathfindingCanvas;
