import React from 'react';
import './Node.css';

const Node = ({ x, y, onClickFn, nodeType }) => {
  return (
    <div
      className={`node ${nodeType}`}
      onClick={(e) => onClickFn({ x, y })}
    ></div>
  );
};

export default Node;
