import React, { memo } from 'react';

const TypeList = ({ types, changeType, selected }) => (
  <div className="TypeList">
    {types.map((type, index) => (
      <button
        key={type.name}
        onClick={() => changeType(type)}
        className={type.name === selected.name ? 'active' : ''}
      >
        {type.name}
      </button>
    ))}
  </div>
);

export default memo(TypeList);