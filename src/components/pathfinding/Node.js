import React from 'react';
import './Node.css';

const Node = ({
  x,
  y,
  onMouseDown,
  onMouseUp,
  onContext,
  onMouseOverFn,
  nodeType,
  selecting,
}) => {
  let scale = selecting ? 'scale' : '';
  return (
    <div
      id={`square-${x}-${y}`}
      className={`node ${nodeType} ${scale} `}
      onContextMenu={(e) => {
        e.preventDefault();
        onContext({ x, y });
      }}
      onMouseDown={(e) => onMouseDown({ x, y })}
      onMouseUp={(e) => onMouseUp({ x, y })}
      onMouseOver={(e) => onMouseOverFn({ x, y })}
    ></div>
  );
};

export default Node;
