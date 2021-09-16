import React, { useState } from 'react';

function Filter() {
  const [text, setText] = useState('');

  return (
    <label htmlFor="text-input">
      Name:
      <input
        type="text"
        data-testid="name-filter"
        id="text-input"
        value={ text }
        name="text-input"
        onChange={ (e) => setText(e.target.value) }
      />
    </label>
  );
}

export default Filter;
