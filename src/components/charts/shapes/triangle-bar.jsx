import React from "react";

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
    y + height
  } ${x + width}, ${y + height}
          Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default TriangleBar;
