import React from 'react';
import Node from './Node';
import './PathfindingCanvas.css';

const NODE_DIM = 40;
class PathfindingCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: null,
      onClickMode: 'setOrigin',
      origin: { x: 0, y: 0 },
      destination: { x: 0, y: 0 },
      nodeList: this.constructNodeList(this.props.container),
      selectingObs: false,
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
    const max_x = Math.floor(dimensions.clientWidth / NODE_DIM);
    const max_y = Math.floor(dimensions.clientHeight / NODE_DIM);
    var list = [];
    for (let i = 0; i < max_x; i++) {
      list.push([]);
      for (let j = 0; j < max_y; j++) {
        list[i].push('');
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
        onClickMode: 'setOrigin',
      },
      nodeList: [...nodeList],
    });
  };

  setOrigin = (node) => {
    if (node !== undefined) {
      const newNodes = [...this.state.nodeList];
      newNodes[this.state.origin.x][this.state.origin.y] = '';
      newNodes[node.x][node.y] = 'origin';
      this.setState({
        origin: { x: node.x, y: node.y },
        onClickMode: 'setDestination',
        nodeList: [...newNodes],
      });
    }
  };

  setDestination = (node) => {
    if (node !== undefined) {
      const newNodes = [...this.state.nodeList];
      newNodes[this.state.destination.x][this.state.destination.y] = '';
      newNodes[node.x][node.y] = 'destination';
      this.setState({
        destination: { x: node.x, y: node.y },
        onClickMode: 'setObstacle',
        nodeList: [...newNodes],
      });
    }
  };

  setObstacle = (node) => {
    //Check origin and destination not overridden
    if (
      !['origin', 'destination'].includes(this.state.nodeList[node.x][node.y])
    ) {
      const newNodes = [...this.state.nodeList];
      newNodes[node.x][node.y] = 'o';
      this.setState({
        nodeList: [...newNodes],
      });
    }
  };

  toggleObs = () => {
    this.setState({
      selectingObs: !this.state.selectingObs,
    });
  };

  getOnClickFn() {
    if (this.state.onClickMode === 'setOrigin') return this.setOrigin;
    if (this.state.onClickMode === 'setDestination') return this.setDestination;
    if (this.state.onClickMode === 'setObstacle') return this.toggleObs;
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
    const max_x = Math.floor(dimensions.width / NODE_DIM);
    const max_y = Math.floor(dimensions.height / NODE_DIM);
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

            var selectingObs = this.state.selectingObs
              ? this.setObstacle
              : () => {
                  return undefined;
                };

            return (
              <Node
                key={[x, y]}
                x={x}
                y={y}
                onClickFn={this.getOnClickFn()}
                onMouseOverFn={selectingObs}
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
