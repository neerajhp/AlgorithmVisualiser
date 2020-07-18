import './Checkbox.css';
import React from 'react';

const Checkbox = ({ algorithm, type = 'checkbox', checked, updateFn }) => {
  return (
    <div className='item'>
      <input
        type={type}
        id={algorithm.name}
        checked={checked}
        onChange={updateFn}
      />
      <label htmlFor={algorithm.name}>{algorithm.label}</label>
    </div>
  );
};

export default Checkbox;
