import './Graph.css';
import React, { useState, useEffect } from 'react';
//import { useTransition, animated } from 'react-spring';

const Graph = ({ enterArray, leaveArray }) => {
  const [array, setArray] = useState(enterArray);

  useEffect(() => {
    setArray(leaveArray);
  }, [leaveArray]);

  //   let height = 0
  //   const transitions = useTransition(
  //     rows.map(data => ({ ...data, y: (height += data.height) - data.height })),
  //     d => d.name,
  //     {
  //       from: { height: 0, opacity: 0 },
  //       leave: { height: 0, opacity: 0 },
  //       enter: ({ y, height }) => ({ y, height, opacity: 1 }),
  //       update: ({ y, height }) => ({ y, height })
  //     }
  //   )

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

  return <ul className='graph'>{renderedArray(array)}</ul>;
};

export default Graph;
