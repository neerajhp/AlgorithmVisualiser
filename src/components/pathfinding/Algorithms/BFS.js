import { constructPath, constructNodeList } from '../../utils/llNode';

function BFS(gridList, origin, destination) {
  let queue = [],
    nodeList = [],
    nextNodes = [],
    animationPath = [],
    max_y = gridList[0].length,
    max_x = gridList.length;
  var node;
  //Create nodeList from grid
  nodeList = constructNodeList(gridList);

  //Queue start node

  queue.push(nodeList[origin.x][origin.y]);

  //While nodes to be explored
  while (queue.length > 0) {
    node = queue.shift();

    //Check if destination reached
    if (node.x === destination.x && node.y === destination.y) {
      break;
    }
    if (node.visited !== true) {
      //Set node visited
      node.visited = true;
      animationPath.push([{ x: node.x, y: node.y, class: 'visited' }]);
      //Explore next nodes and add to queue
      nextNodes = explore(node, nodeList, max_x, max_y);
      animationPath.push(
        ...nextNodes.map((item) => [{ x: item.x, y: item.y, class: 'queued' }])
      );
      queue.push(...nextNodes);
    }
  }
  //Construct path
  animationPath.push(
    ...constructPath(node).map((item) => [
      { x: item.x, y: item.y, class: 'path' },
    ])
  );

  return animationPath;
}

function explore(node, nodeList, max_x, max_y) {
  let toExplore = [],
    x = node.x,
    y = node.y;

  console.log(node);
  //Check four cardinal nodes - CHANGE COLOUR
  if (
    x - 1 >= 0 &&
    nodeList[x - 1][y] !== null &&
    !nodeList[x - 1][y].visited
  ) {
    nodeList[x - 1][y].parent = node;
    toExplore.push(nodeList[x - 1][y]);
  }
  if (
    x + 1 < max_x &&
    nodeList[x + 1][y] !== null &&
    !nodeList[x + 1][y].visited
  ) {
    nodeList[x + 1][y].parent = node;
    toExplore.push(nodeList[x + 1][y]);
  }
  if (
    y - 1 >= 0 &&
    nodeList[x][y - 1] !== null &&
    !nodeList[x][y - 1].visited
  ) {
    nodeList[x][y - 1].parent = node;
    toExplore.push(nodeList[x][y - 1]);
  }
  if (
    y + 1 < max_y &&
    nodeList[x][y + 1] !== null &&
    !nodeList[x][y + 1].visited
  ) {
    nodeList[x][y + 1].parent = node;
    toExplore.push(nodeList[x][y + 1]);
  }

  return toExplore;
}

export default BFS;
