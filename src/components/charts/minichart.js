import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const MiniChart = ({ data = [], stroke = "#8884d8" }) => {
  return (
    <ResponsiveContainer width="100%" height={40}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="cases"
          stroke={stroke}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MiniChart;
