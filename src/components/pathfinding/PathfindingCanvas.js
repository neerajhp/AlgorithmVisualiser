import React from 'react';
import Node from './Node';
import './PathfindingCanvas.css';
import BFS from './Algorithms/BFS';

const NODE_DIM = 30;
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
      onClickMode: 'setOrigin',
      origin: { x: 0, y: 0 },
      destination: { x: 0, y: 0 },
      nodeList: this.constructNodeList(this.props.container),
      selectingObs: false,
    };
  }

  componentDidMount() {
    //Event listener for window resize
    window.addEventListener('resize', this.updateDimensions);
  }

  componentDidUpdate() {
    if (this.state.active !== this.props.active) {
      // Run visualiser
      if (!this.state.active) {
        this.setState({ active: this.props.active }, () => this.animate());
      } else {
        this.setState({ active: this.props.active });
      }
    }
  }

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
        onClickMode: 'setObstacle',
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

  //
  //Mouse event handlers

  mouseUpHandler = (node) => {
    if (this.state.onClickMode === 'setObstacle')
      this.setState({
        selectingObs: false,
      });
    else return this.setOrigin(node);
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
    const stateList = BFS(
      this.state.nodeList,
      this.state.origin,
      this.state.destination
    );

    //Animate through list of explored nodes
    let step = 1;
    this.sim = setInterval(() => {
      if (step > stateList.length - 1) {
        clearInterval(this.sim);
        this.props.resetApp();
      } else {
        let node = stateList[step][0];
        document
          .getElementById(`square-${node.x}-${node.y}`)
          .classList.add(`${node.class}`);
        step++;
      }
    }, SORT_SPEED);
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
