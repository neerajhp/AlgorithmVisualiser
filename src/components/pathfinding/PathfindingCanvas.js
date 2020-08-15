import React from 'react';
import Node from './Node';
import './PathfindingCanvas.css';
import BFS from './Algorithms/BFS';

const NODE_DIM = 40;
const SORT_SPEED = 20;
class PathfindingCanvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.active,
      dimensions: {
        width: this.props.container.clientWidth,
        height: this.props.container.clientHeight,
      },
      origin: { x: 5, y: 5 },
      destination: { x: 10, y: 10 },
      onClickMode: this.props.nodeClickMode,
      selectingObs: false,
      nodeList: this.constructNodeList(this.props.container),
      step: 1,
    };
  }

  componentDidMount() {
    //Get max nodes on axes within view
    const max_x = Math.floor(this.state.dimensions.width / NODE_DIM);
    const max_y = Math.floor(this.state.dimensions.height / NODE_DIM);
    //Randomly assign origin
    this.setOrigin({
      x: Math.floor(Math.random() * Math.floor(max_x)),
      y: Math.floor(Math.random() * Math.floor(max_y)),
    });
    this.setDestination({
      x: Math.floor(Math.random() * Math.floor(max_x)),
      y: Math.floor(Math.random() * Math.floor(max_y)),
    });
    //Event listener for window resize
    window.addEventListener('resize', this.updateDimensions);
  }

  componentDidUpdate() {
    if (this.state.onClickMode !== this.props.nodeClickMode) {
      this.setState({ onClickMode: this.props.nodeClickMode });
    }
    if (this.state.active !== this.props.active) {
      // Run visualiser
      if (!this.state.active) {
        this.setState({ active: this.props.active }, () => this.animate());
      } else {
        this.setState({
          active: this.props.active,
        });
      }
    }
  }

  //Constructs an array of arrays representing all the nodes(grid squares)
  constructNodeList(dimensions) {
    // Get node max indices
    const max_x = Math.floor(dimensions.clientWidth / NODE_DIM) + 2;
    const max_y = Math.floor(dimensions.clientHeight / NODE_DIM) + 2;
    var list = [];
    for (let i = 0; i < max_x; i++) {
      list.push([]);
      for (let j = 0; j < max_y; j++) {
        list[i].push('');
      }
    }
    return list;
  }

  //
  //SETTING THE STAGE

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
    if (node !== undefined) {
      const newNodes = [...this.state.nodeList];
      newNodes[this.state.origin.x][this.state.origin.y] = '';
      newNodes[node.x][node.y] = 'origin';
      this.setState({
        origin: { x: node.x, y: node.y },
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

  //
  //Mouse event handlers

  mouseUpHandler = (node) => {
    if (this.state.onClickMode === 'setObstacle')
      this.setState({
        selectingObs: false,
      });
    else if (this.state.onClickMode === 'setOrigin') this.setOrigin(node);
    else if (this.state.onClickMode === 'setDestination')
      this.setDestination(node);
  };

  mouseDownHandler = (node) => {
    if (this.state.onClickMode === 'setObstacle') {
      this.setObstacle(node);
      this.setState({
        selectingObs: true,
      });
    } else
      return () => {
        /*Do Nothing */
      };
  };

  mouseOverHandler = (node) => {
    if (this.state.selectingObs) {
      this.setObstacle(node);
    }
  };

  //
  //Animation
  animate() {
    //Get list of explored nodes from algorithm
    const explored = BFS(
      this.state.nodeList,
      this.state.origin,
      this.state.destination
    );

    //Animate through list of explored nodes

    this.sim = setInterval(() => {
      // Check if reached animation end or paused
      if (this.state.step > explored.length - 1 || !this.state.active) {
        clearInterval(this.sim);
        //this.props.resetApp();
      } else {
        // Go to next expanded node
        let node = explored[this.state.step][0];
        document
          .getElementById(`square-${node.x}-${node.y}`)
          .classList.add(`${node.class}`);
        this.setState({ step: this.state.step + 1 });
      }
    }, SORT_SPEED);
  }

  constructGrid(dimensions) {
    //If theres an issue with the parent div
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
    const max_x = Math.floor(dimensions.width / NODE_DIM) + 2;
    const max_y = Math.floor(dimensions.height / NODE_DIM) + 2;
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
                onMouseDown={this.mouseDownHandler}
                onMouseUp={this.mouseUpHandler}
                onContext={this.setDestination}
                toggleObs={this.toggleObs}
                onMouseOverFn={this.mouseOverHandler}
                selecting={this.state.selectingObs}
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
