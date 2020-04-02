import React from "react";
import {
  LineChart,
  Line
  // XAxis,
  // YAxis,
  // CartesianGrid,
  // Tooltip,
  // Legend
} from "recharts";

const dataStore = [
  {
    name: "Page A",
    cases: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    cases: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    cases: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    cases: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    cases: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    cases: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    cases: 3490,
    pv: 4300,
    amt: 2100
  }
];

const MiniChart = ({ data = dataStore, stroke = "#8884d8" }) => {
  console.log("minichart", data);
  return (
    <LineChart width={180} height={50} data={data}>
      <Line
        type="monotone"
        dataKey="cases"
        stroke={stroke}
        strokeWidth={2}
        dot={false}
      />
    </LineChart>
  );
};

export default MiniChart;
