import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const UtilComponent = ({ inputs }) => {
  const cn = (...inputs) => {
    return twMerge(clsx(inputs));
  };

  return (
    <div>
      <h1>Util Component</h1>
      <p>Class Names: {cn(...inputs)}</p>
    </div>
  );
};

export default UtilComponent;