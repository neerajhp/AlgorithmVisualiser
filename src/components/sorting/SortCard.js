import './SortCard.css';
import React from 'react';

const SortCard = ({ algorithm, array }) => {
  var graph = array[0];
  var index_i = array[1];
  var index_j = array[2];

  // console.log(graph);
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
          className={`vl`}
        >
          <i className='caret down icon' />
          <i className='caret up icon' />
        </li>
      );
    });
  };

  return (
    <div className='ui segment sortCard'>
      <div>{algorithm.label}</div>
      <ul className='graph'>{renderedArray(graph)}</ul>
      <div>Algorithm Info</div>
    </div>
  );
};

export default SortCard;
