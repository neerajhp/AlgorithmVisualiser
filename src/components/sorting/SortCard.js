import './SortCard.css';
import React from 'react';

const SortCard = ({ algorithm, array, finished }) => {
  var graph = array[0];
  var index_i = array[1];
  var index_j = array[2];

  let sorted = finished ? 'sorted' : '';

  const renderedArray = (array) => {
    return array.map((val, index) => {
      var i = '';
      var j = '';
      j = index === index_j ? 'caret down icon' : '';
      i = index === index_i ? 'caret up icon' : '';

      return (
        <li
          key={index}
          style={{
            height: val + '%',
            width: 100 / array.length + '%',
          }}
          className={`vl ${j} ${i} ${sorted}`}
        >
          <i className={`${j}`} />
          <i className={`${i}`} />
        </li>
      );
    });
  };

  return (
    <div className='ui segment sortCard'>
      <div className='card-header'>{algorithm.label}</div>
      <ul className='graph'>{renderedArray(graph)}</ul>
    </div>
  );
};

export default SortCard;
