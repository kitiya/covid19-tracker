import React from "react";
import TriangleBar from "../charts/shapes/triangle-bar";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const CountriesChart = ({ data, theme }) => {
  // console.log(data);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart
        data={data}
        margin={{ top: 30, right: 20, left: 10, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="country" tick={{ fontSize: 12 }} />
        <YAxis
          fontSize={12}
          tickFormatter={(value) => new Intl.NumberFormat("en").format(value)}
        />
        <Tooltip
          formatter={(value) => new Intl.NumberFormat("en").format(value)}
        />
        <Bar
          dataKey="cases"
          fill={theme.palette.cases.confirmed}
          shape={<TriangleBar />}
        ></Bar>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CountriesChart;
