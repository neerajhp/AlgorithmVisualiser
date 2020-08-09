export class llNode {
  constructor(x, y, parent = null, visited = false) {
    this.x = x;
    this.y = y;
    this.parent = parent;
    this.visited = visited;
  }
}

export function constructNodeList(grid) {
  let list = [];
  list = grid.map((col, x) =>
    col.map((square, y) => {
      if (square !== 'o') {
        return new llNode(x, y);
      } else return null;
    })
  );

  return list;
}

export function constructPath(node) {
  let path = [];

  while (node.parent !== null) {
    path.unshift(node);
    node = node.parent;
  }
  return path;
}
