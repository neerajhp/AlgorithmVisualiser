import React from 'react';
import './Node.css';

const Node = ({ x, y, onClickFn, onMouseOverFn, nodeType }) => {
  return (
    <div
      className={`node ${nodeType}`}
      onMouseDown={(e) => onClickFn()}
      onMouseUp={(e) => onClickFn({ x, y })}
      onMouseOver={(e) => onMouseOverFn({ x, y })}
    ></div>
  );
};

export default Node;
