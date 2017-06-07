import React from 'react';
import Data from '../../data.json';

const FirstComponent = () => {
  console.log(Data);
  return (
    <div>
      <p>My First Component</p>
    </div>
  );
};


export default FirstComponent;
