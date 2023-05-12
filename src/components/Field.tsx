import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

function Field({ value, onChange }: Props) {
  return (
    <div className='field'>
      <h1>Translate App</h1>
      <label>Enter English</label>
      <input
        className='input'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Field;
