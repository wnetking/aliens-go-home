import React from 'react';
import * as c from '../utils/constants';

const Sky = () => {
  const skyStyle = {
    fill: '#30abef'
  };
  const skyWidth = c.skyAndGroundWidth;
  const gameHeight = 1200;
  return (
    <rect
      style={skyStyle}
      x={skyWidth / -2}
      y={100 - gameHeight}
      width={skyWidth}
      height={gameHeight}
    />
  );
};

export default Sky;
