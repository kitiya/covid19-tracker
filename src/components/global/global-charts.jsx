import React from "react";

import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

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

const GlobalChart = ({ data }) => {
  // console.log(data);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart
        data={data}
        margin={{ top: 30, right: 20, left: 10, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="country" style={{ fontSize: 12 }} />
        <YAxis
          fontSize={12}
          tickFormatter={(value) => new Intl.NumberFormat("en").format(value)}
        />
        <Tooltip
          formatter={(value) => new Intl.NumberFormat("en").format(value)}
        />
        <Bar dataKey="cases" fill="#ec407a" shape={<TriangleBar />}></Bar>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default GlobalChart;
