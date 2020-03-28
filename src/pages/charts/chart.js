import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const Chart = ({ data }) => {
  return data ? (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      {data.map((item, index) => (
        <Line
          key={index}
          type="monotone"
          dataKey={item.datakey || "confirmed"}
          stroke={item.stroke || "red"}
        />
      ))}

      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey={data.xAxisDataKey || "date"} />
      <YAxis />
      <Tooltip />
    </LineChart>
  ) : null;
};

export default Chart;
