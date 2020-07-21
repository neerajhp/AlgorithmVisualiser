import './Graph.css';
import React, { useState, useEffect } from 'react';
//import { useTransition, animated } from 'react-spring';

const Graph = ({ algorithm, enterArray, leaveArray }) => {
  const [array, setArray] = useState(enterArray);

  useEffect(() => {
    setArray(leaveArray);
  }, []);

  const renderedArray = (array) => {
    return array.map((val, index) => (
      <li
        key={index}
        style={{
          height: val + '%',
          width: 100 / array.length + '%',
        }}
        className='vl'
      ></li>
    ));
  };

  return (
    <ul className='graph'>
      {renderedArray(array)}
      <button></button>
    </ul>
  );
};

export default Graph;
