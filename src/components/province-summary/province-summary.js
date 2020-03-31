import React, { PropTypes } from "react";

import { compareValues } from "../../util/sort";

import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from "recharts";

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y +
    height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y +
    height} ${x + width}, ${y + height}
          Z`;
};

const TriangleBar = props => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// TriangleBar.propTypes = {
//   fill: PropTypes.string,
//   x: PropTypes.number,
//   y: PropTypes.number,
//   width: PropTypes.number,
//   height: PropTypes.number
// };

const ProvinceTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>PROVINCE</TableCell>
            <TableCell>CONFIRMED CASES</TableCell>
            <TableCell>DEATHS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <Typography>{item.province}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{item.confirmed}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{item.deaths}</Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const ProvinceChart = ({ data }) => {
  const colors = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf"
  ];
  return (
    <ResponsiveContainer width="90%" height={500}>
      <ComposedChart
        data={data}
        margin={{ top: 30, right: 30, left: 30, bottom: 50 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          angle={-45}
          textAnchor="end"
          dataKey="province"
          style={{ fontSize: 10 }}
        />
        <YAxis
          yAxisId="left"
          fontSize={12}
          label={{
            value: "Confirmed Cases",
            angle: -90,
            position: "insideLeft",
            offset: 0
          }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          fontSize={12}
          label={{
            value: "Deaths",
            angle: 90,
            position: "insideRight",
            offset: 0
          }}
        />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Bar
          yAxisId="left"
          dataKey="confirmed"
          fill="#ec407a"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} />
          ))}
        </Bar>
        <Bar
          yAxisId="right"
          dataKey="deaths"
          fill="#607d8b"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} />
          ))}
        </Bar>
      </ComposedChart>
    </ResponsiveContainer>
  );
};
const ProvinceSummary = ({ tableData }) => {
  console.log("TABLE DATA", tableData);
  const sortedData = tableData
    ? tableData.sort(compareValues("confirmed", "desc"))
    : [];

  console.log("sorted", sortedData);
  return (
    <>
      <Typography variant="h4" color="secondary">
        Province Summary
      </Typography>
      <Grid container>
        <Grid item md={4}>
          <ProvinceTable data={sortedData} />
        </Grid>
        <Grid item md={8}>
          <ProvinceChart data={sortedData} />
        </Grid>
      </Grid>
    </>
  );
};

export default ProvinceSummary;
